import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';

import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import NewEntryScreen from '../screens/NewEntryScreen';
import { Colors } from '../theme/colors';

export const registerScreens = (): void => {
  Navigation.registerComponent('Settings', () => {
    return withNavigationProvider(SettingsScreen);
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
      bottomTabs: {
        id: 'BOTTOM_TAB_LAYOUT',
        children: [
          {
            stack: {
              id: 'Home',
              children: [
                {
                  component: {
                    id: 'Home',
                    name: 'Home',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../assets/home-tab-icon.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'Settings',
              children: [
                {
                  component: {
                    id: 'Settings',
                    name: 'Settings',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../assets/settings-tab-icon.png'),
                },
              },
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
    bottomTabs: {
      backgroundColor: `${Colors.ALMOST_BLACK}`,
      borderWidth: 1,
      borderColor: `${Colors.DARK_GRAY}`,
      elevation: 50,
    },
    bottomTab: {
      iconColor: `${Colors.GRAY}`,
      selectedIconColor: `${Colors.WHITE}`,
    },
  });
};
