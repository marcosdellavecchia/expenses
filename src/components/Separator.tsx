import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../theme/colors';

/*
 * Separator Component
 */

export const Separator: FunctionComponent = () => (
  <View style={styles.separator}></View>
);

const styles = StyleSheet.create({
  separator: {
    marginBottom: 5,
    height: 1,
    width: '100%',
    backgroundColor: `${Colors.DARK_GRAY}`,
  },
});
