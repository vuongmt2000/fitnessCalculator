import React, {useCallback, useEffect} from 'react';
import {View, Button} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {requestLogout} from '../../redux/authentication';
import {useDispatch, useSelector} from 'react-redux';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import Screens from '../Screens';
import {pushTo} from '../../libs/navigation/utils';

const index: NavigationFunctionComponent = ({componentId}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLogin = useSelector((state: any) => state.authentication.isLogin);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onDisplayNotification = useCallback(() => {
    dispatch(requestLogout());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestLogout]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   if (!isLogin) {
  //     Navigation.push(componentId, {
  //       component: {
  //         name: Screens.LoginScreen,
  //       },
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLogin]);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      await messaging()
        .getToken()
        .then(fcmToken => {
          console.log('fcmToken', fcmToken);
        })
        .catch(err => console.log('err', err));
    }
  }

  return (
    <View>
      <Button
        title="Display Notification"
        onPress={() => onDisplayNotification()}
      />
      <Button
        title="Display remote permission"
        onPress={() => requestUserPermission()}
      />
    </View>
  );
};

export default index;
