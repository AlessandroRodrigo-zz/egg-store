import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './src/config/firebase';
import Routes from './src/presentation/navigation';
import Providers from './src/presentation/providers';

export default function App(): JSX.Element {
  return (
    <Providers>
      <Routes colorScheme="light" />
      <StatusBar style="auto" />
    </Providers>
  );
}
