import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import I18n from '../../i18n';
import EmptyBoxSvg from '../assets/images/empty-box.svg';
import { Colors } from '../theme/colors';
import { Spacer } from './Spacer';

export const EmptyMessage: FunctionComponent = () => (
  <>
    <EmptyBoxSvg width={125} height={125} color={Colors.DARK_GRAY} />
    <Spacer />
    <Text style={styles.h1}>{I18n.t('loadFirstExpense')}</Text>
    <Spacer size="xs" />
    <Text style={styles.body1}>{I18n.t('pressButtonBelow')}</Text>
  </>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
  },
  h1: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 26,
    color: Colors.GRAY,
  },
  body1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: Colors.DARK_GRAY,
  },
});
