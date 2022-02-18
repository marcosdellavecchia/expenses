import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

import EmptyBoxSvg from '../assets/empty-box.svg';
import { RoundButton } from '../components/buttons';
import { Spacer } from '../components/Spacer';
import { Colors } from '../theme/colors';
import { pushScreen } from '../navigation';

const HomeScreen: NavigationFunctionComponent = ({ componentId }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.roundButtonContainer}>
        <RoundButton
          label="+"
          accessibilityLabel="Add new entry"
          onPress={() => pushScreen(componentId, 'NewEntry')}
        />
      </View>
      <EmptyBoxSvg width={125} height={125} color={Colors.DARK_GRAY} />
      <Spacer />
      <Text style={styles.h1}>Cargá tu primer gasto</Text>
      <Spacer size="xs" />
      <Text style={styles.body1}>
        Podés presionar el botón o deslizar hacia abajo
      </Text>
      <Text style={styles.body1}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Colors.BLACK}`,
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: `${Colors.GRAY}`,
  },
  body1: {
    fontSize: 16,
    color: `${Colors.DARK_GRAY}`,
  },
  roundButtonContainer: {
    position: 'absolute',
    top: '5%',
    right: '5%',
  },
});

export default HomeScreen;
