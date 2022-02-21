import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../theme/colors';
import { getExpensesBalance } from '../utils';

/*
 * Constants
 */

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
  const formattedExpensesBalance = expensesBalance.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceText}>Saldo actual</Text>
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
