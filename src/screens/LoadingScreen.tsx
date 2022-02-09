import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

const LoadingScreen: NavigationFunctionComponent = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" />
      <Text>Loading App...</Text>
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

export default LoadingScreen;
