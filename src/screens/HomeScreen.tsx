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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';

import { Separator } from '../components/Separator';
import { Colors } from '../theme/colors';
import { EmptyMessage } from '../components/EmptyMessage';
import { CurrentBalance } from '../components/CurrentBalance';
import { formatToCurrency, getCurrentMonth, getCurrentYear } from '../utils';
import { STORAGE_ITEM_NAME } from '../data';
import { Expense } from '../interfaces';

/*
 * Constants
 */

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

const HomeScreen: NavigationFunctionComponent<HomeScreenProps> = () => {
  useNavigationComponentDidAppear(() => {
    getExpenses();
  });
  const [expenses, setExpenses] = useState([]);

  const getExpenses = () => {
    AsyncStorage.getItem(STORAGE_ITEM_NAME).then(expenses => {
      const parsedExpenses = JSON.parse(expenses || '');
      const currentMonthExpenses = parsedExpenses.filter(
        (expenses: Expense) =>
          expenses.storeDate === `${currentMonth}-${currentYear}`,
      );

      setExpenses(currentMonthExpenses);
    });
  };

  const expensesByDate = expenses.reduce(function (r, a: Expense) {
    r[a.displayDate] = r[a.displayDate] || [];
    r[a.displayDate].push(a);
    return r;
  }, Object.create(null));

  const removeExpenses = async (item: Expense) => {
    const newExpenses = await expenses.filter(expense => expense !== item);
    await AsyncStorage.setItem(
      STORAGE_ITEM_NAME,
      JSON.stringify(newExpenses),
    ).then(() => getExpenses());
  };

  const renderExpenses = ({ item }: any) => (
    <>
      <Text style={styles.dateText}>{item[0].displayDate}</Text>
      <Separator />
      {item.map((item: Expense, index: number) => (
        <TouchableOpacity
          style={styles.listTextContainer}
          onLongPress={() => showRemoveAlert(item)}
          key={index}>
          <Text style={styles.listIcon}>{item.icon}</Text>
          <Text style={styles.listLabel}>{item.label}</Text>
          <Text style={styles.listValue}>{formatToCurrency(item.value)}</Text>
        </TouchableOpacity>
      ))}
    </>
  );

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

  return (
    <View style={styles.screen}>
      {expenses.length === 0 ? (
        <EmptyMessage />
      ) : (
        <>
          <View style={styles.balanceContainer}>
            <CurrentBalance expenses={expenses} currentMonth={currentMonth} />
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              data={Object.values(expensesByDate)}
              renderItem={renderExpenses}
              keyExtractor={(item, index) => index.toString()}
              initialNumToRender={15}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Colors.BLACK}`,
  },
  flatListContainer: {
    position: 'absolute',
    bottom: 0,
    height: '60%',
    width: SCREEN_WIDTH * 0.9,
  },
  balanceContainer: {
    position: 'absolute',
    top: 0,
  },
  listTextContainer: {
    width: SCREEN_WIDTH * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 8,
    color: `${Colors.GRAY}`,
  },
  listIcon: {
    width: '10%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 19,
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    color: `${Colors.WHITE}`,
  },
  listLabel: {
    width: '40%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 17,
    paddingTop: 8,
    paddingBottom: 8,
    color: `${Colors.WHITE}`,
  },
  listValue: {
    width: '40%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 17,
    textAlign: 'right',
    paddingTop: 8,
    paddingBottom: 8,
    color: `${Colors.WHITE}`,
  },
});

export default HomeScreen;
