import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../theme/colors';

export const CurrentBalance: FunctionComponent = () => (
  <View style={styles.balanceContainer}>
    <Text style={styles.balanceText}>Saldo actual</Text>
    <Text style={styles.balanceNumber}>$ 1234,50</Text>
  </View>
);

const styles = StyleSheet.create({
  balanceContainer: {
    marginTop: 80,
    marginBottom: 80,
  },
  balanceText: {
    fontSize: 16,
    padding: 5,
    textAlign: 'center',
    color: `${Colors.GRAY}`,
  },
  balanceNumber: {
    fontSize: 42,
    fontWeight: 'bold',
    color: `${Colors.WHITE}`,
  },
});
