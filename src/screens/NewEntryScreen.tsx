import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NumberInput } from '../components/NumberInput';
import { Colors } from '../theme/colors';
import {
  validateNumbers,
  removeLeadingZeros,
  getCurrentMonth,
  getCurrentYear,
} from '../utils';
import { CategoryModal } from '../components/CategoryModal';
import { Spacer } from '../components/Spacer';
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

  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();

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

    category.type !== EntryType.INCOME
      ? n.unshift([
          category.label,
          -inputValue,
          `${currentMonth}-${currentYear}`,
        ])
      : n.unshift([
          category.label,
          inputValue,
          `${currentMonth}-${currentYear}`,
        ]);

    await AsyncStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(n)).then(() =>
      Navigation.pop(componentId),
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
      <NumberInput
        value={inputValue}
        onValueChange={onInputValueChange}
        onSubmitEditing={saveValue}
      />
      <Spacer size="l" />
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.categoryText}>{category.label}</Text>
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
});
