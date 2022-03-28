import React, { useEffect, useState } from 'react';
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

import I18n from '../../i18n';
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

  useEffect(() => {
    if (isLightThemeEnabled) {
      showNotAvailableAlert();
    }
  }, [isLightThemeEnabled]);

  const toggleSwitch = () =>
    setIsLightThemeEnabled(previousState => !previousState);

  const clearAsyncStorage = async () => {
    AsyncStorage.clear().then(() => RNRestart.Restart());
  };

  const showRemoveAlert = () =>
    Alert.alert(I18n.t('deleteAllData'), I18n.t('deleteAllDataDescription'), [
      {
        text: I18n.t('cancel'),
        style: 'cancel',
      },
      {
        text: I18n.t('delete'),
        style: 'destructive',
        onPress: () => clearAsyncStorage(),
      },
    ]);

  const showNotAvailableAlert = () =>
    Alert.alert(I18n.t('notAvailable'), I18n.t('lightModeNotAvailable'), [
      {
        text: 'Ok',
        style: 'default',
        onPress: () => setIsLightThemeEnabled(false),
      },
    ]);

  return (
    <View style={styles.screen}>
      <Text style={styles.h1}>{I18n.t('settings')}</Text>
      <Spacer />
      <View style={styles.optionContainer}>
        <Text style={styles.body1}>{I18n.t('lightMode')}</Text>
        <Switch
          trackColor={{ false: Colors.DARK_GRAY, true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isLightThemeEnabled}
        />
      </View>
      <Spacer size="s" />
      <View style={styles.optionContainer}>
        <Text style={styles.body1}>{I18n.t('currencySymbol')}</Text>
        <Text style={styles.disabled}>{I18n.t('notAvailable')}</Text>
      </View>
      <Spacer size="s" />
      <TouchableOpacity onPress={showRemoveAlert}>
        <Text style={styles.body1}>{I18n.t('deleteAllData')}</Text>
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
