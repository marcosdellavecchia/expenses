import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import GestureRecognizer from 'react-native-swipe-gestures';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';

import PlusButtonSvg from '../assets/plus-button.svg';
import { Colors } from '../theme/colors';
import { pushScreenVertically } from '../navigation';
import { EmptyMessage } from '../components/EmptyMessage';
import { CurrentBalance } from '../components/CurrentBalance';

/*
 * Constants
 */

const GESTURE_RECOGNIZER_CONFIG = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const SCREEN_WIDTH = Dimensions.get('screen').width;

/*
 * Types
 */

interface HomeScreenProps {
  componentId: string;
}

/*
 * Home Screen Component
 */

const HomeScreen: NavigationFunctionComponent<HomeScreenProps> = ({
  componentId,
}) => {
  useNavigationComponentDidAppear(() => {
    getExpenses();
  });

  const [expenses, setExpenses] = useState([]);

  const getExpenses = () => {
    AsyncStorage.getItem('VALUESX4').then(expenses => {
      setExpenses(JSON.parse(expenses || ''));
    });
  };

  const renderExpenses = ({ item, index }: any) => (
    <View style={styles.listTextContainer}>
      <Text style={styles.listText}>{item}</Text>
    </View>
  );

  const handleNewEntryNavigation = () =>
    pushScreenVertically(componentId, 'NewEntry');

  return (
    <GestureRecognizer
      onSwipeDown={handleNewEntryNavigation}
      config={GESTURE_RECOGNIZER_CONFIG}
      style={styles.screen}>
      <View style={styles.roundButtonContainer}>
        <TouchableOpacity
          accessibilityLabel="Add new entry"
          onPress={handleNewEntryNavigation}>
          <PlusButtonSvg width={40} height={40} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
      {expenses.length === 0 ? (
        <EmptyMessage />
      ) : (
        <>
          <CurrentBalance />
          <View style={styles.flatListContainer}>
            <FlatList
              data={expenses.reverse()}
              renderItem={renderExpenses}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </>
      )}
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Colors.BLACK}`,
  },
  roundButtonContainer: {
    position: 'absolute',
    top: '5%',
    right: '5%',
  },
  flatListContainer: {
    height: '50%',
    width: SCREEN_WIDTH * 0.9,
  },
  listTextContainer: {
    borderBottomWidth: 0.5,
    borderColor: `${Colors.DARK_GRAY}`,
    width: SCREEN_WIDTH * 0.9,
  },
  listText: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    color: `${Colors.WHITE}`,
  },
});

export default HomeScreen;
