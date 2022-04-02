import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import I18n from '../../i18n';
import EmptyBoxSvg from '../assets/images/empty-box.svg';
import { Colors } from '../theme/colors';
import { Spacer } from './Spacer';

interface EmptyMessageProps {
  currentMonth: string;
}

export const EmptyMessage: FunctionComponent<EmptyMessageProps> = ({
  currentMonth,
}) => (
  <View style={styles.screen}>
    <EmptyBoxSvg width={125} height={125} color={Colors.DARK_GRAY} />
    <Spacer />
    <Text style={styles.h1}>
      {I18n.t('loadFirstExpense', { currentMonth: currentMonth })}
    </Text>
    <Spacer size="xs" />
    <Text style={styles.body1}>{I18n.t('pressButtonBelow')}</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    marginHorizontal: 16,
  },
  h1: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: Colors.GRAY,
    textAlign: 'center',
  },
  body1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: Colors.DARK_GRAY,
    textAlign: 'center',
  },
});
