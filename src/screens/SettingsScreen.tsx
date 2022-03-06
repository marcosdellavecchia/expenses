import React, { FunctionComponent, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Alert,
  TouchableOpacity,
} from 'react-native';

import { Spacer } from '../components/Spacer';
import { Colors } from '../theme/colors';

const SettingsScreen: FunctionComponent = () => {
  const [isLightThemeEnabled, setIsLightThemeEnabled] = useState(false);

  const toggleSwitch = () =>
    setIsLightThemeEnabled(previousState => !previousState);

  const handleDeletePress = () =>
    Alert.alert(
      'Eliminar datos',
      '¿Deseas eliminar todos los datos de la app?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {},
        },
      ],
    );

  return (
    <View style={styles.screen}>
      <Text style={styles.h1}>Configuración</Text>
      <Spacer />
      <View style={styles.switchContainer}>
        <Text style={styles.body1}>Modo claro</Text>
        <Switch
          trackColor={{ false: `${Colors.DARK_GRAY}`, true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isLightThemeEnabled}
        />
      </View>
      <Spacer size="s" />
      <Text style={styles.body1}>Moneda</Text>
      <Spacer size="s" />
      <TouchableOpacity onPress={handleDeletePress}>
        <Text style={styles.body1}>Eliminar datos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: `${Colors.BLACK}`,
  },
  h1: {
    fontSize: 26,
    fontFamily: 'OpenSans-Bold',
    color: `${Colors.GRAY}`,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body1: {
    alignContent: 'flex-start',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: `${Colors.WHITE}`,
  },
});

export default SettingsScreen;
