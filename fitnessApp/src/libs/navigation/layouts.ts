import {LayoutRoot} from 'react-native-navigation';
import Screens from '../../screens/Screens';

export const developmentAuthenticateLayout: LayoutRoot = {
  root: {
    stack: {
      id: Screens.LoginStack,
      children: [
        {
          component: {
            name: Screens.LoginScreen,
            options: {
              statusBar: {
                translucent: true,
                drawBehind: true,
                style: 'dark',
                backgroundColor: 'transparent',
              },
              topBar: {
                visible: false,
                height: 0,
                backButton: {
                  visible: false,
                },
              },
              popGesture: false,
              hardwareBackButton: {
                popStackOnPress: false,
                dismissModalOnPress: false,
              },
            },
          },
        },
      ],
      options: {},
    },
  },
};
