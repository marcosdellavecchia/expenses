import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NumberInput } from '../components/NumberInput';
import CloseIconSvg from '../assets/images/close-icon.svg';
import { Colors } from '../theme/colors';
import {
  validateNumbers,
  removeLeadingZeros,
  getDisplayDate,
  getStoreDate,
} from '../utils';
import { CategoryModal } from '../components/CategoryModal';
import { Spacer } from '../components/Spacer';
import { entryCategories } from '../data';
import { EntryCategory, EntryType } from '../interfaces';
import { STORAGE_ITEM_NAME } from '../data';

/*
 * Constants
 */

const displayDate = getDisplayDate();
const storeDate = getStoreDate();
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
  useEffect(() => {
    getLastSelectedExpenseCategory();
  }, []);

  const [inputValue, setinputValue] = useState('');
  const [category, setCategory] = useState(entryCategories[0]);
  const [isModalVisible, setModalVisible] = useState(false);

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
    console.log(selectedCategory);
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

  return (
    <View style={styles.screen}>
      <TouchableOpacity
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
          {category.icon} {category.label}
        </Text>
      </TouchableOpacity>
      <Spacer />
      <TouchableOpacity style={styles.saveContainer} onPress={handleSubmit}>
        <Text style={styles.saveText}>Guardar</Text>
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

NewEntryScreen.options = {
  topBar: {
    title: {
      text: 'Cargar gasto',
      color: `${Colors.WHITE}`,
    },
    background: {
      color: `${Colors.BLACK}`,
    },
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Colors.BLACK}`,
  },
  saveContainer: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: `${Colors.DARK_GRAY}`,
  },
  saveText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: `${Colors.ALMOST_BLACK}`,
  },
  categoryText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: `${Colors.GRAY}`,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 25,
    left: 25,
  },
});
