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

  const onValueChange = (text: string) => {
    setValue(validateNumbers(text));
  };

  const saveValue = async () => {
    const expenses = await AsyncStorage.getItem('VALUESX');
    const n = expenses ? JSON.parse(expenses) : [];
    n.push(value);
    await AsyncStorage.setItem('VALUESX', JSON.stringify(n)).then(() =>
      Navigation.pop(componentId),
    );
  };

  return (
    <View style={styles.screen}>
      <NumberInput value={value} onValueChange={onValueChange} />
      <TouchableOpacity style={styles.saveContainer} onPress={saveValue}>
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
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
