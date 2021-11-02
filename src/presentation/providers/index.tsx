import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { FeedbackDialogProvider } from '../contexts/feedbackDialog';
import { ToastProvider } from '../contexts/toast';
import { UserProvider } from '../contexts/user';
import theme from '../styles/theme';

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <FeedbackDialogProvider>
        <ToastProvider>
          <UserProvider>{children}</UserProvider>
        </ToastProvider>
      </FeedbackDialogProvider>
    </ThemeProvider>
  );
};

export default Providers;
