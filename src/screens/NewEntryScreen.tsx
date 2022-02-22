import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NumberInput } from '../components/NumberInput';
import { Colors } from '../theme/colors';
import { validateNumbers, removeLeadingZeros, currencyFormat } from '../utils';
import { CategoryModal } from '../components/CategoryModal';
import { Spacer } from '../components/Spacer';

/*
 * Constants
 */

const expensesCategories = [
  '💸 Gastos varios',
  '🥑 Alimentos',
  '👕 Ropa',
  '💊 Salud',
  '🚗 Transporte',
  '📚 Educación',
  '🍿 Entretenimiento',
  '🍸 Salidas',
];

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
  const [value, setValue] = useState('');
  const [category, setCategory] = useState(expensesCategories[0]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  const onInputValueChange = (text: string) => {
    const sanitizedValue = validateNumbers(text);
    const sanitizedValueWithoutZeros = removeLeadingZeros(sanitizedValue);
    setValue(sanitizedValueWithoutZeros);
  };

  const saveValue = async () => {
    const expenses = await AsyncStorage.getItem('VALUESX9');
    const n = expenses ? JSON.parse(expenses) : [];
    n.push([category, value]);
    await AsyncStorage.setItem('VALUESX9', JSON.stringify(n)).then(() =>
      Navigation.pop(componentId),
    );
  };

  const handleSubmit = () => {
    if (value.length === 0 || Number(value) == 0) {
      return;
    }
    saveValue();
  };

  return (
    <View style={styles.screen}>
      <NumberInput
        value={value}
        onValueChange={onInputValueChange}
        onSubmitEditing={saveValue}
      />
      <Spacer size="l" />
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
      <Spacer />
      <TouchableOpacity style={styles.saveContainer} onPress={handleSubmit}>
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
      <CategoryModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        categories={expensesCategories}
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
    fontSize: 16,
    color: `${Colors.ALMOST_BLACK}`,
  },
  categoryText: {
    fontSize: 16,
    color: `${Colors.GRAY}`,
  },
});
