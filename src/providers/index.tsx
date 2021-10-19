import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { ToastProvider } from '../contexts/toast';
import { UserProvider } from '../contexts/user';
import theme from '../styles/theme';

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <UserProvider>{children}</UserProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default Providers;
