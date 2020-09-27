import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpSuccessful from '../pages/SignUpSuccessful';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      // O stack Navigator cria um header padrão
      headerShown: false, // headerShown determina se o header fica visivel ou não
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="SignIn"
  >
    <Auth.Screen name="SignIn" component={SignIn} />

    <Auth.Screen name="SignUp" component={SignUp} />

    <Auth.Screen name="SignUpSuccessful" component={SignUpSuccessful} />
  </Auth.Navigator>
);

export default AuthRoutes;
