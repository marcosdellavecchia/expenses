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
        keyboardType="number-pad"
        placeholder="$0"
        value={`${value}`}
        onChangeText={onValueChange}
        maxLength={8}
        onSubmitEditing={onSubmitEditing}
        autoFocus
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
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: `${Colors.WHITE}`,
    color: `${Colors.WHITE}`,
    fontSize: 42,
    fontWeight: 'bold',
  },
});
