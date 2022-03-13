import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';

import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import NewEntryScreen from '../screens/NewEntryScreen';
import { Colors } from '../theme/colors';

export const registerScreens = (): void => {
  Navigation.registerComponent('Home', () => {
    return withNavigationProvider(HomeScreen);
  });
  Navigation.registerComponent('Settings', () => {
    return withNavigationProvider(SettingsScreen);
  });
  Navigation.registerComponent('NewEntry', () => {
    return withNavigationProvider(NewEntryScreen);
  });
};

Navigation.events().registerBottomTabPressedListener(({ tabIndex }) => {
  if (tabIndex === 1) {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'NewEntry',
            },
          },
        ],
      },
    });
  }
});

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
                  icon: require('../assets/images/home-tab-icon.png'),
                  iconColor: `${Colors.GRAY}`,
                  selectedIconColor: `${Colors.WHITE}`,
                },
              },
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                  icon: require('../assets/images/add-tab-icon.png'),
                  iconWidth: 85,
                  iconHeight: 85,
                  iconInsets: {
                    top: 90,
                    bottom: 98,
                  },
                  iconColor: `${Colors.WHITE}`,
                  selectTabOnPress: false,
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
                  icon: require('../assets/images/settings-tab-icon.png'),
                  iconColor: `${Colors.GRAY}`,
                  selectedIconColor: `${Colors.WHITE}`,
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
  });
};
