import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../theme/colors';
import {
  getExpensesBalance,
  getCurrentMonth,
  formatToCurrency,
} from '../utils';

/*
 * Types
 */

interface CurrentBalanceProps {
  expenses: string[];
}

/*
 * Current Balance Component
 */

export const CurrentBalance: FunctionComponent<CurrentBalanceProps> = ({
  expenses,
}) => {
  const expensesBalance = getExpensesBalance(expenses);
  const formattedExpensesBalance = formatToCurrency(expensesBalance);
  const currentMonth = getCurrentMonth();
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceText}>Saldo de {currentMonth}</Text>
      <Text style={styles.balanceNumber}>{formattedExpensesBalance}</Text>
    </View>
  );
};

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
