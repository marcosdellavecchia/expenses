import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

import { pushScreen } from '../navigation';

const HomeScreen: NavigationFunctionComponent = ({ componentId }) => {
  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
