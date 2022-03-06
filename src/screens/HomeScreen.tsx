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
import PlusButtonSvg from '../assets/images/plus-button.svg';
import { Colors } from '../theme/colors';
import { pushScreenVertically } from '../navigation/helpers';
import { EmptyMessage } from '../components/EmptyMessage';
import { CurrentBalance } from '../components/CurrentBalance';
import { formatExpenseDetail, getCurrentMonth, getCurrentYear } from '../utils';
import { STORAGE_ITEM_NAME } from '../data';

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
              data={expenses}
              renderItem={renderExpenses}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={Separator}
              initialNumToRender={15}
            />
          </View>
        </>
      )}
      <View style={styles.roundButtonContainer}>
        <TouchableOpacity
          accessibilityLabel="Add new entry"
          onPress={handleNewEntryNavigation}>
          <PlusButtonSvg width={45} height={45} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
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
  roundButtonContainer: {
    position: 'absolute',
    bottom: '4%',
    right: '5%',
  },
  flatListContainer: {
    position: 'absolute',
    bottom: 0,
    height: '55%',
    width: SCREEN_WIDTH * 0.9,
  },
  balanceContainer: {
    position: 'absolute',
    top: 0,
  },
  listTextContainer: {
    width: SCREEN_WIDTH * 0.9,
  },
  listText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 8,
    color: `${Colors.WHITE}`,
  },
});

export default HomeScreen;
