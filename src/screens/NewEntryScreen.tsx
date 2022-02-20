import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NumberInput } from '../components/NumberInput';
import { Colors } from '../theme/colors';
import { validateNumbers } from '../utils';
import { CategoryModal } from '../components/CategoryModal';

/*
 * Constants
 */

const expensesCategories = [
  '🥑 Alimentos',
  '👕 Ropa',
  '💊 Salud',
  '🚗 Transporte',
  '📚 Educación',
  '🍿 Entretenimiento',
  '🍸 Salidas',
  '🤷 Otro',
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
  const [category, setCategory] = useState('Gasto');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onValueChange = (text: string) => {
    setValue(validateNumbers(text));
  };

  const saveValue = async () => {
    const expenses = await AsyncStorage.getItem('VALUESX4');
    const n = expenses ? JSON.parse(expenses) : [];
    n.push([`${category} $${value}`]);
    await AsyncStorage.setItem('VALUESX4', JSON.stringify(n)).then(() =>
      Navigation.pop(componentId),
    );
  };

  return (
    <View style={styles.screen}>
      <NumberInput
        value={value}
        onValueChange={onValueChange}
        onSubmitEditing={saveValue}
      />
      <TouchableOpacity style={styles.saveContainer} onPress={toggleModal}>
        <Text style={styles.saveText}>Elegir categoría</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveContainer} onPress={saveValue}>
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
      <CategoryModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        categories={expensesCategories}
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
    paddingTop: 30,
  },
  saveText: {
    fontSize: 16,
    color: `${Colors.GRAY}`,
  },
});
