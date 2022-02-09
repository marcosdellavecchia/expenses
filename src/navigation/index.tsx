import React from 'react';
import {
  Navigation,
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

export const registerScreens = (): void => {
  Navigation.registerComponent('Loading', () => LoadingScreen);
  Navigation.registerComponent('Home', () => HomeScreen);
  Navigation.registerComponent('Login', () => LoginScreen);
  Navigation.registerComponent('Register', () => RegisterScreen);
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

export const pushScreen = (
  componentId: string,
  screenName: string,
  text: string,
): void => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      options: {
        topBar: {
          visible: true,
          animate: true,
          title: { text },
        },
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
