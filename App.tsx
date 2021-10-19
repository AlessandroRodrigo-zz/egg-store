import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './src/config/firebase';
import Routes from './src/navigation';
import Providers from './src/providers';

export default function App(): JSX.Element {
  return (
    <Providers>
      <Routes colorScheme="light" />
      <StatusBar style="auto" />
    </Providers>
  );
}
