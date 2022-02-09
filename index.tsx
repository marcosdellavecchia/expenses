import { Navigation } from 'react-native-navigation';

import {
  registerScreens,
  setDefaultNavigationOptions,
  startApp,
} from './src/navigation/index';

registerScreens();

setDefaultNavigationOptions();

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
