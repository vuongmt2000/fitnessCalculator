import {Navigation} from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';
import {
  startApplicationLogin,
  startWithApplication,
} from './libs/navigation/utils';
import {initialApplication} from './modules/application';
import {Application} from './modules/application/application';
import {registerScreensWithApplication} from './screens';

const start = () => {
  const application = initialApplication();
  registerScreensWithApplication(application);

  Navigation.events().registerAppLaunchedListener(() => {
    disFinishLauchingWithApplication(application);
  });
};

const disFinishLauchingWithApplication = async (application: Application) => {
  await application.init();
  if (application.isInitialized) {
    const isLogin = application.store.getState().authentication.isLogin;
    console.log('isLogin', application.store.getState());
    try {
      if (!isLogin) {
        startApplicationLogin();
      } else {
        startWithApplication(application);
      }
    } catch (error) {
      startWithApplication(application);
    }
  }
  SplashScreen.hide();
};

export default start;
