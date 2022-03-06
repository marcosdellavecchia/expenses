import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import EmptyBoxSvg from '../assets/images/empty-box.svg';
import { Colors } from '../theme/colors';
import { Spacer } from './Spacer';

export const EmptyMessage: FunctionComponent = () => (
  <>
    <EmptyBoxSvg width={125} height={125} color={Colors.DARK_GRAY} />
    <Spacer />
    <Text style={styles.h1}>Cargá tu primer gasto</Text>
    <Spacer size="xs" />
    <Text style={styles.body1}>
      Presioná el botón en la esquina inferior derecha
    </Text>
  </>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Colors.BLACK}`,
  },
  h1: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 26,
    color: `${Colors.GRAY}`,
  },
  body1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: `${Colors.DARK_GRAY}`,
  },
});
