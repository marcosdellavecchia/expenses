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
