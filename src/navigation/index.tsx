import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';

import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';
import NewEntryScreen from '../screens/NewEntryScreen';

export const registerScreens = (): void => {
  Navigation.registerComponent('Loading', () => {
    return withNavigationProvider(LoadingScreen);
  });
  Navigation.registerComponent('Home', () => {
    return withNavigationProvider(HomeScreen);
  });
  Navigation.registerComponent('NewEntry', () => {
    return withNavigationProvider(NewEntryScreen);
  });
};

export const startApp = (): void => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
};

export const setDefaultNavigationOptions = (): void => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
    },
    topBar: {
      visible: false,
    },
  });
};
