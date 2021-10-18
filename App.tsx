import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import Routes from './src/navigation';
import theme from './src/styles/theme';
import './src/config/firebase';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Routes colorScheme="light" />

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
