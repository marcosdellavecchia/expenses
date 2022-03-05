import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import GestureRecognizer from 'react-native-swipe-gestures';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';

import PlusButtonSvg from '../assets/plus-button.svg';
import { Colors } from '../theme/colors';
import { pushScreenVertically } from '../navigation/helpers';
import { EmptyMessage } from '../components/EmptyMessage';
import { CurrentBalance } from '../components/CurrentBalance';
import { formatExpenseDetail, getCurrentMonth, getCurrentYear } from '../utils';
import { STORAGE_ITEM_NAME } from '../data';

/*
 * Constants
 */

const GESTURE_RECOGNIZER_CONFIG = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const SCREEN_WIDTH = Dimensions.get('screen').width;

const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear();

/*
 * Types
 */

interface HomeScreenProps {
  componentId: string;
}

/*
 * Home Screen
 */

const HomeScreen: NavigationFunctionComponent<HomeScreenProps> = ({
  componentId,
}) => {
  useNavigationComponentDidAppear(() => {
    getExpenses();
  });

  const [expenses, setExpenses] = useState([]);

  const getExpenses = () => {
    AsyncStorage.getItem(STORAGE_ITEM_NAME).then(expenses => {
      const parsedExpenses = JSON.parse(expenses || '');
      const currentMonthExpenses = parsedExpenses.filter((expenses: string[]) =>
        expenses.includes(`${currentMonth}-${currentYear}`),
      );

      setExpenses(currentMonthExpenses);
    });
  };

  const removeExpenses = async (item: any) => {
    const newExpenses = await expenses.filter(expense => expense !== item);
    await AsyncStorage.setItem(
      STORAGE_ITEM_NAME,
      JSON.stringify(newExpenses),
    ).then(() => getExpenses());
  };

  const renderExpenses = ({ item }: any) => (
    <TouchableOpacity
      style={styles.listTextContainer}
      onLongPress={() => showRemoveAlert(item)}>
      <Text style={styles.listText}>{formatExpenseDetail(item)}</Text>
    </TouchableOpacity>
  );

  const handleNewEntryNavigation = () =>
    pushScreenVertically(componentId, 'NewEntry');

  const showRemoveAlert = (item: any) =>
    Alert.alert('Eliminar', '¿Deseas eliminar este item?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: () => removeExpenses(item),
      },
    ]);
  console.log(expenses);
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
          <CurrentBalance expenses={expenses} currentMonth={currentMonth} />
          <View style={styles.flatListContainer}>
            <FlatList
              data={expenses}
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
    paddingTop: 8,
    paddingBottom: 8,
    color: `${Colors.WHITE}`,
  },
});

export default HomeScreen;
