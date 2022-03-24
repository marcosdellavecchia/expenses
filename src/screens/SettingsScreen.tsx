import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationFunctionComponent } from 'react-native-navigation';
import RNRestart from 'react-native-restart';

import { Spacer } from '../components/Spacer';
import { Colors } from '../theme/colors';

/*
 * Types
 */

interface SettingsScreenProps {
  componentId: string;
}

/*
 * Settings Screen
 */

const SettingsScreen: NavigationFunctionComponent<SettingsScreenProps> = ({
  componentId,
}) => {
  const [isLightThemeEnabled, setIsLightThemeEnabled] = useState(false);

  const toggleSwitch = () =>
    setIsLightThemeEnabled(previousState => !previousState);

  const clearAsyncStorage = async () => {
    AsyncStorage.clear().then(() => RNRestart.Restart());
  };

  const showRemoveAlert = () =>
    Alert.alert(
      'Eliminar datos',
      '¿Deseas eliminar por completo los datos almacenados?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => clearAsyncStorage(),
        },
      ],
    );

  return (
    <View style={styles.screen}>
      <Text style={styles.h1}>Configuración</Text>
      <Spacer />
      <View style={styles.optionContainer}>
        <Text style={styles.body1}>Modo claro</Text>
        {/* <Switch
          trackColor={{ false: Colors.DARK_GRAY, true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isLightThemeEnabled}
        /> */}
        <Text style={styles.disabled}>No disponible</Text>
      </View>
      <Spacer size="s" />
      <View style={styles.optionContainer}>
        <Text style={styles.body1}>Símbolo de moneda</Text>
        <Text style={styles.disabled}>No disponible</Text>
      </View>
      <Spacer size="s" />
      <TouchableOpacity onPress={showRemoveAlert}>
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
    backgroundColor: Colors.BLACK,
  },
  h1: {
    fontSize: 26,
    fontFamily: 'OpenSans-Bold',
    color: Colors.GRAY,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body1: {
    alignContent: 'flex-start',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: Colors.WHITE,
  },
  disabled: {
    alignContent: 'flex-start',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: Colors.DARK_GRAY,
  },
});

export default SettingsScreen;
