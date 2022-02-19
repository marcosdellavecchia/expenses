import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';

import { NumberInput } from '../components/NumberInput';
import { Colors } from '../theme/colors';
import { validateNumbers } from '../utils';

const NewEntryScreen: NavigationFunctionComponent = ({ componentId }) => {
  const [value, setValue] = useState(validateNumbers(''));

  const onValueChange = (text: string) => {
    setValue(validateNumbers(text));
  };

  return (
    <View style={styles.screen}>
      <NumberInput value={value} onValueChange={onValueChange} />
      <TouchableOpacity
        style={styles.saveContainer}
        onPress={() => Navigation.pop(componentId)}>
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
