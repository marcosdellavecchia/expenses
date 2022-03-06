import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Spacer } from '../components/Spacer';

import { Colors } from '../theme/colors';

const SettingsScreen: FunctionComponent = () => (
  <View style={styles.screen}>
    <Text style={styles.h1}>Configuración</Text>
    <Spacer size="xs" />
    <Text style={styles.body1}>Disponible próximamente...</Text>
  </View>
);

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

export default SettingsScreen;
