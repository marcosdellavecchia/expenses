import React, { FunctionComponent } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { Colors } from '../theme/colors';

interface NumberInputProps {
  value: string;
  onValueChange: (text: string) => void;
  onSubmitEditing: () => void;
}

export const NumberInput: FunctionComponent<NumberInputProps> = ({
  value,
  onValueChange,
  onSubmitEditing,
}) => {
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="$0,00"
        placeholderTextColor={Colors.ALMOST_BLACK}
        value={`${value}`}
        onChangeText={onValueChange}
        maxLength={8}
        onSubmitEditing={onSubmitEditing}
        textAlign="center"
        autoFocus
        keyboardAppearance="dark"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: `${Colors.WHITE}`,
    color: `${Colors.WHITE}`,
    fontSize: 42,
  },
});
