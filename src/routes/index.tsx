import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppIcon from '../components/Icon';
import AppInput from '../components/Input';
import {RootState} from '../store';
import {setAuthToken} from '../store/reducers/userSlice';
import {THEME} from '../theme';

const Routes = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.user.authToken);

  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Hello from new font</Text>
        <Text
          style={{
            fontFamily: THEME.FONTS.TYPE.BOLD,
          }}>
          Hello from new font
        </Text>

        <AppIcon name="home" />

        <AppInput />
      </View>
    </NavigationContainer>
  );
};

export default Routes;
