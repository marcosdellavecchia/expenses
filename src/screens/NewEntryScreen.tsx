import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

import { Colors } from '../theme/colors';

const NewEntryScreen: NavigationFunctionComponent = () => {
  return (
    <View style={styles.screen}>
      <Text>New Entry Screen</Text>
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
});

export default NewEntryScreen;

NewEntryScreen.options = {
  topBar: {
    title: {
      text: 'Agregar gasto',
      color: `${Colors.WHITE}`,
    },
    background: {
      color: `${Colors.BLACK}`,
    },
  },
};
