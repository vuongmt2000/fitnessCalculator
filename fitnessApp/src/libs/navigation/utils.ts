import {LayoutRoot, Navigation, Options} from 'react-native-navigation';
import {BottomTabs} from '../../constants/enum';
import {Application} from '../../modules/application/application';
import {becomeActive} from '../../redux/application';
import Screens from '../../screens/Screens';
import {developmentAuthenticateLayout} from './layouts';

export function startApplicationLogin(): void {
  const layout = {...developmentAuthenticateLayout};
  layout.root.stack?.children?.push({
    component: {
      name: Screens.LoginScreen,
      options: {
        statusBar: {
          translucent: true,
          drawBehind: true,
          style: 'dark',
          backgroundColor: 'transparent',
        },
        layout: {
          componentBackgroundColor: 'yellow',
        },
        topBar: {
          visible: false,
          height: 0,
        },
      },
    },
  });
  Navigation.setRoot(layout);
}
export function startWithApplication(application: Application): void {
  const layout: LayoutRoot = {
    root: {
      bottomTabs: {
        id: BottomTabs,
        options: {
          bottomTabs: {
            testID: 'Button-Tabs',
            tabsAttachMode: 'onSwitchToTab',
          },
        },
        children: [
          {
            stack: {
              id: Screens.HomeStack,
              children: [
                {
                  component: {
                    name: Screens.HomeScreen,
                    options: {
                      topBar: {
                        visible: false,
                      },
                      statusBar: {
                        style: 'dark',
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  //   icon: require('assets/icons/navigation/home.png'),
                  //   selectedIcon: require('assets/icons/navigation/home-alt.png'),
                  testID: 'HomeTabs',
                  popToRoot: true,
                },
              },
            },
          },
          {
            stack: {
              id: Screens.DetailStack,
              children: [
                {
                  component: {
                    name: Screens.DetailScreen,
                    options: {
                      layout: {
                        componentBackgroundColor: 'yellow',
                      },
                      topBar: {
                        visible: false,
                        height: 0,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Detail',
                  //   icon: require('assets/icons/navigation/user.png'),
                  //   selectedIcon: require('assets/icons/navigation/user-alt.png'),
                  testID: 'OptionsBottomTab',
                  popToRoot: true,
                },
              },
            },
          },
        ],
      },
    },
  };

  Navigation.setRoot(layout).then(() => {
    application.store.dispatch(becomeActive());
  });
}

export const pushTo = (
  stack: string,
  screen: string,
  passProps = {},
  options?: Options,
) => {
  Navigation.push(stack, {
    component: {
      name: screen,
      options: {
        // layout: {
        //   componentBackgroundColor: 'rgba(250, 250, 250, 1)',
        // },
        topBar: {
          visible: false,
          height: 0,
        },
        statusBar: {
          style: 'dark',
          hideWithTopBar: false,
        },
        bottomTabs: {
          visible: false,
        },
        ...options,
      },
      passProps: {
        ...passProps,
      },
    },
  });
};
