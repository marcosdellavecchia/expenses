import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../theme/colors';

/*
 * Types
 */

type ButtonProps = {
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
};

/*
 * Buttons
 */

export const RoundButton: FunctionComponent<ButtonProps> = ({
  label,
  accessibilityLabel,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.roundButtonTouchable}
      activeOpacity={0.5}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}>
      <Text style={styles.roundButtonText}> {label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

/*
 * Styles
 */

const styles = StyleSheet.create({
  roundButtonTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${Colors.WHITE}`,
    margin: 10,
    borderRadius: 50,
    width: 35,
    height: 35,
    paddingRight: 4,
    paddingBottom: 2,
  },
  roundButtonText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: `${Colors.BLACK}`,
  },
});
