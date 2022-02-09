import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../theme/colors';

/*
 * Types
 */

type PrimaryButtonProps = {
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
};

/*
 * Primary Button
 */

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  label,
  accessibilityLabel,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.primaryButtonTouchable}
      activeOpacity={0.5}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}>
      <Text style={styles.primaryButtonText}> {label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

/*
 * Secondary Button
 */

export const SecondaryButton: FunctionComponent<PrimaryButtonProps> = ({
  label,
  accessibilityLabel,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.secondaryButtonTouchable}
      activeOpacity={0.5}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}>
      <Text style={styles.secondaryButtonText}> {label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

/*
 * Styles
 */

const styles = StyleSheet.create({
  primaryButtonTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${Colors.PRIMARY}`,
    padding: 10,
    margin: 8,
    borderRadius: 5,
    elevation: 3,
    width: '90%',
    height: 50,
  },
  secondaryButtonTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 8,
    elevation: 3,
    width: '90%',
    height: 50,
  },
  primaryButtonText: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: `${Colors.BACKGROUND}`,
  },
  secondaryButtonText: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: `${Colors.PRIMARY}`,
  },
});
