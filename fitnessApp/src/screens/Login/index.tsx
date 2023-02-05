import React, {useCallback, useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Button from '../../components/elements/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {requestLogin} from '../../redux/authentication';
import {pushTo} from '../../libs/navigation/utils';
import {NavigationFunctionComponent} from 'react-native-navigation';
import Screens from '../Screens';
import { BottomTabs } from '../../constants/enum';

const index: NavigationFunctionComponent = ({componentId}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLogin = useSelector((state: any) => state.authentication.isLogin);
  const login = useCallback(() => {
    dispatch(requestLogin());
  }, [requestLogin]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   if (isLogin) {
  //     pushTo(componentId, BottomTabs);
  //   }
  // }, [isLogin]);

  return (
    <ImageBackground
      style={styles.wrapper}
      source={require('../../../assets/imagesBackground/backgroundLogin.jpg')}>
      <Button
        label="Login with Google"
        style={styles.btnLogin}
        labelStyle={styles.label}
        onPress={login}
        childrenLeft={
          <View style={styles.icon}>
            <Icon name="google" size={16} color="#EA4335" />
          </View>
        }
      />
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnLogin: {
    backgroundColor: '#EA4335',
    marginHorizontal: 32,
    height: 48,
    borderRadius: 20,
    marginBottom: 14,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontWeight: '700',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
