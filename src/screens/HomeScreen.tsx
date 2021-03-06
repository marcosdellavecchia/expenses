import React, { useState, useEffect } from 'react';
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

import I18n from '../../i18n';
import { Colors } from '../theme/colors';
import { CurrentBalance, EmptyMessage, Separator } from '../components';
import { formatToCurrency, getStoreDate, getCurrentMonth } from '../utils';
import { STORAGE_ITEM_NAME } from '../data';
import { Expense } from '../interfaces';

/*
 * Constants
 */

const SCREEN_WIDTH = Dimensions.get('screen').width;

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
  useNavigationComponentDidAppear(e => {
    getExpenses();
  });

  const [expenses, setExpenses] = useState([]);
  const [storeDate, setStoreDate] = useState(getStoreDate());
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setStoreDate(storeDate);
    setCurrentMonth(currentMonth);
  }, [storeDate, currentMonth]);

  const getExpenses = () => {
    AsyncStorage.getItem(STORAGE_ITEM_NAME).then(expenses => {
      const parsedExpenses = expenses ? JSON.parse(expenses) : [];
      const currentMonthExpenses = parsedExpenses.filter(
        (expenses: Expense) => expenses.storeDate === storeDate,
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
          <Text style={styles.listLabel}>
            {I18n.t(`categories.${item.label}`)}
          </Text>
          <Text style={styles.listValue}>{formatToCurrency(item.value)}</Text>
        </TouchableOpacity>
      ))}
    </>
  );

  const showRemoveAlert = (item: any) =>
    Alert.alert(I18n.t('delete'), I18n.t('deleteDescription'), [
      {
        text: I18n.t('cancel'),
        style: 'cancel',
      },
      {
        text: I18n.t('delete'),
        style: 'destructive',
        onPress: () => removeExpenses(item),
      },
    ]);

  return (
    <View style={styles.screen}>
      {expenses.length === 0 ? (
        <EmptyMessage currentMonth={currentMonth} />
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

/*
 * Styles
 */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
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
    color: Colors.GRAY,
  },
  listIcon: {
    width: '10%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 19,
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    color: Colors.WHITE,
  },
  listLabel: {
    width: '40%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 17,
    paddingTop: 8,
    paddingBottom: 8,
    color: Colors.WHITE,
  },
  listValue: {
    width: '40%',
    fontFamily: 'OpenSans-Regular',
    fontSize: 17,
    textAlign: 'right',
    paddingTop: 8,
    paddingBottom: 8,
    color: Colors.WHITE,
  },
});

export default HomeScreen;
