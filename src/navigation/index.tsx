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

export const pushScreenVertically = (
  componentId: string,
  screenName: string,
): void => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      options: {
        animations: {
          push: {
            content: {
              translationY: {
                from: require('react-native').Dimensions.get('window').height,
                to: 0,
                duration: 250,
              },
            },
          },
          pop: {
            content: {
              translationY: {
                from: 0,
                to: require('react-native').Dimensions.get('window').height,
                duration: 250,
              },
            },
          },
        },
        topBar: {
          visible: true,
          animate: true,
          backButton: {
            color: 'white',
          },
          background: {
            translucent: true,
          },
        },
      },
    },
  });
};

export const showModal = (screenName: string) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: screenName,
            options: {
              topBar: {
                visible: true,
                title: {
                  alignment: 'center',
                },
              },
            },
          },
        },
      ],
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
