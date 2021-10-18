import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import Initial from '../screens/initial';
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

interface RoutesConfigParams {
  colorScheme: ColorSchemeName;
}

export default function Routes({
  colorScheme,
}: RoutesConfigParams): JSX.Element {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        defaultScreenOptions={{ headerShown: false }}
        initialRouteName="Inital"
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inital"
          component={Initial}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
