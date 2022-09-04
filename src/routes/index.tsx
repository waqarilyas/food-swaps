import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import PrimaryButton from '../components/Button';
import AppInput from '../components/Input';
import SocialButton from '../components/SocialButton';
import AppText from '../components/Text';

const Routes = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Hello from new font</Text>
        <AppText variant="heading-small">Signup to continue</AppText>

        <View style={{width: '90%'}}>
          <AppInput label="Email Address" />
          <AppInput label="Password" secureTextEntry />

          <SocialButton variant="apple" />
          <SocialButton variant="facebook" />
          <SocialButton variant="email" />

          <PrimaryButton title="Click me" variant="primary" isForward />
        </View>
      </View>
    </NavigationContainer>
  );
};

export default Routes;
