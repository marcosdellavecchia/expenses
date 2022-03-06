import { Navigation } from 'react-native-navigation';

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
        bottomTabs: {
          visible: true,
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
