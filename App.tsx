import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import Routes from './navigation';
import theme from './src/styles/theme';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Routes colorScheme="light" />

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
