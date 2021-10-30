import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import useUser from '../hooks/useUser';
import Home from '../screens/home';
import Initial from '../screens/initial';
import Login from '../screens/login';
import SignUp from '../screens/signUp';

const Stack = createNativeStackNavigator();

interface RoutesConfigParams {
  colorScheme: ColorSchemeName;
}

function UnauthenticatedRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function AuthenticatedRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function Routes({
  colorScheme,
}: RoutesConfigParams): JSX.Element {
  const { user } = useUser();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {user.id ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </NavigationContainer>
  );
}
