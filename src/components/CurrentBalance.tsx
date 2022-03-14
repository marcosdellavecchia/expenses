import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Expense } from '../interfaces';
import { Colors } from '../theme/colors';
import { getExpensesBalance, formatToCurrency } from '../utils';

/*
 * Types
 */

interface CurrentBalanceProps {
  expenses: Expense[];
  currentMonth: string;
}

/*
 * Current Balance Component
 */

export const CurrentBalance: FunctionComponent<CurrentBalanceProps> = ({
  expenses,
  currentMonth,
}) => {
  const expensesBalance = getExpensesBalance(expenses);
  const formattedExpensesBalance = formatToCurrency(expensesBalance);

  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceText}>Saldo de {currentMonth}</Text>
      <Text style={styles.balanceNumber}>{formattedExpensesBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    marginTop: 90,
    marginBottom: 90,
  },
  balanceText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    padding: 5,
    textAlign: 'center',
    color: Colors.GRAY,
  },
  balanceNumber: {
    fontSize: 42,
    fontFamily: 'OpenSans-Bold',
    color: Colors.WHITE,
  },
});
