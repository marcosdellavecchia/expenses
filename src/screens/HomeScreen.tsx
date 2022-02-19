import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import GestureRecognizer from 'react-native-swipe-gestures';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EmptyBoxSvg from '../assets/empty-box.svg';
import PlusButtonSvg from '../assets/plus-button.svg';
import { Spacer } from '../components/Spacer';
import { Colors } from '../theme/colors';
import { pushScreenVertical } from '../navigation';

/*
 * Constants
 */

const GESTURE_RECOGNIZER_CONFIG = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

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
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses();
  }, [expenses]);

  const getExpenses = () => {
    AsyncStorage.getItem('VALUESX').then(expenses => {
      setExpenses(JSON.parse(expenses || ''));
    });
  };

  const handleNewEntryNavigation = () =>
    pushScreenVertical(componentId, 'NewEntry');

  const renderItem = ({ item, index }: any) => (
    <Text style={styles.body1}>{item}</Text>
  );

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
        <>
          <EmptyBoxSvg width={125} height={125} color={Colors.DARK_GRAY} />
          <Spacer />
          <Text style={styles.h1}>Cargá tu primer gasto</Text>
          <Spacer size="xs" />
          <Text style={styles.body1}>
            Podés presionar el botón o deslizar hacia abajo
          </Text>
        </>
      ) : (
        <FlatList
          data={expenses}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
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
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: `${Colors.GRAY}`,
  },
  body1: {
    fontSize: 16,
    color: `${Colors.DARK_GRAY}`,
  },
  roundButtonContainer: {
    position: 'absolute',
    top: '5%',
    right: '5%',
  },
});

export default HomeScreen;
