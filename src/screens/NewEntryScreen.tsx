import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';

import { Colors } from '../theme/colors';

const NewEntryScreen: NavigationFunctionComponent = ({ componentId }) => {
  const handleDismissModal = () => Navigation.dismissModal(componentId);

  return (
    <View style={styles.screen}>
      <Text style={styles.h1}>New Entry Screen</Text>
      <TouchableOpacity onPress={handleDismissModal}>
        <Text style={styles.body1}>Dismiss Modal</Text>
      </TouchableOpacity>
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
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: `${Colors.GRAY}`,
  },
  body1: {
    fontSize: 16,
    color: `${Colors.DARK_GRAY}`,
  },
});

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
