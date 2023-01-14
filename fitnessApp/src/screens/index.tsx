import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {Application} from '../modules/application/application';
import Screens from './Screens';
import {ApplicationProvider} from '../modules/application';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const registerScreensWithApplication = (application: Application) => {
  console.log('registerScreensWithApplication');
  Navigation.registerComponent(Screens.HomeScreen, () => {
    const Home = require('./Home').default;
    return gestureHandlerRootHOC(props => (
      <ApplicationProvider application={application}>
        <SafeAreaProvider>
          <Home {...props} />
        </SafeAreaProvider>
      </ApplicationProvider>
    ));
  });
  Navigation.registerComponent(Screens.DetailScreen, () => {
    const Detail = require('./Detail').default;
    return gestureHandlerRootHOC(props => (
      <ApplicationProvider application={application}>
        <SafeAreaProvider>
          <Detail {...props} />
        </SafeAreaProvider>
      </ApplicationProvider>
    ));
  });
};
