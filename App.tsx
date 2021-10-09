import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { Button, ThemeProvider } from 'react-native-magnus';

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Button bg="black">Saiba mais</Button>
      <Text>Teste do teste</Text>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
