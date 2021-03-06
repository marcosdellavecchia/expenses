import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import I18n from '../../i18n';
import CloseIconSvg from '../assets/images/close-icon.svg';
import { Colors } from '../theme/colors';
import {
  validateNumbers,
  removeLeadingZeros,
  getStoreDate,
  getDisplayDate,
} from '../utils';
import { CategoryModal, NumberInput, Spacer } from '../components';
import { entryCategories } from '../data';
import { EntryCategory, EntryType } from '../interfaces';
import { STORAGE_ITEM_NAME } from '../data';

/*
 * Types
 */

interface NewEntryScreenProps {
  componentId: string;
}

/*
 * New Entry Screen
 */

const NewEntryScreen: NavigationFunctionComponent<NewEntryScreenProps> = ({
  componentId,
}) => {
  const [inputValue, setinputValue] = useState('');
  const [category, setCategory] = useState(entryCategories[0]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [storeDate, setStoreDate] = useState(getStoreDate());
  const [displayDate, setDisplayDate] = useState(getDisplayDate());

  useEffect(() => {
    getLastSelectedExpenseCategory();
  }, []);

  useEffect(() => {
    setStoreDate(storeDate);
    setDisplayDate(displayDate);
  }, [storeDate, displayDate]);

  const getLastSelectedExpenseCategory = () => {
    AsyncStorage.getItem(STORAGE_ITEM_NAME).then(expenses => {
      const parsedExpenses = expenses ? JSON.parse(expenses) : [];
      const lastCategoryIndex = parsedExpenses[0].index;

      return setCategory(entryCategories[lastCategoryIndex]);
    });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCategoryChange = (selectedCategory: EntryCategory) => {
    setCategory(selectedCategory);
  };

  const onInputValueChange = (text: string) => {
    const sanitizedValue = validateNumbers(text);
    const sanitizedValueWithoutZeros = removeLeadingZeros(sanitizedValue);
    setinputValue(sanitizedValueWithoutZeros);
  };

  const saveValue = async () => {
    const entry = await AsyncStorage.getItem(STORAGE_ITEM_NAME);
    const n = entry ? JSON.parse(entry) : [];

    n.unshift({
      index: entryCategories.indexOf(category),
      icon: category.icon,
      label: category.label,
      value: category.type === EntryType.INCOME ? inputValue : -inputValue,
      displayDate,
      storeDate,
    });

    await AsyncStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(n)).then(() =>
      Navigation.dismissModal(componentId),
    );
  };

  const handleSubmit = () => {
    if (inputValue.length === 0 || Number(inputValue) == 0) {
      return;
    }
    saveValue();
  };

  /*
   * Styles
   */

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        style={styles.closeIconContainer}
        onPress={() => Navigation.dismissModal(componentId)}>
        <CloseIconSvg width={25} height={25} />
      </TouchableOpacity>
      <NumberInput
        value={inputValue}
        onValueChange={onInputValueChange}
        onSubmitEditing={saveValue}
      />
      <Spacer size="l" />
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.categoryText}>
          {category.icon} {I18n.t(`categories.${category.label}`)}
        </Text>
      </TouchableOpacity>
      <Spacer />
      <TouchableOpacity style={styles.saveContainer} onPress={handleSubmit}>
        <Text style={styles.saveText}>
          {category.type === EntryType.EXPENSE
            ? I18n.t('addExpense')
            : I18n.t('addIncome')}
        </Text>
      </TouchableOpacity>
      <CategoryModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        categories={entryCategories}
        onCategoryChange={handleCategoryChange}
      />
    </View>
  );
};

export default NewEntryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '25%',
    backgroundColor: Colors.BLACK,
  },
  saveContainer: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.DARK_GRAY,
  },
  saveText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: Colors.ALMOST_BLACK,
  },
  categoryText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: Colors.GRAY,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 50,
    left: 30,
  },
});
