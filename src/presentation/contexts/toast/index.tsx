import React, {
  createContext,
  createRef,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Snackbar } from 'react-native-magnus';

type ToastType = 'success' | 'error' | null;

interface Toast {
  message: string;
  type: ToastType;
  visible: boolean;
}

export interface ToastContextData {
  toast: Toast;
  showToast(message: string, type: ToastType): void;
  hideToast(): void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
);

export const ToastProvider: React.FC = ({ children }) => {
  const snackbarRef = createRef<Snackbar>();

  const [toast, setToast] = useState<Toast>({
    message: '',
    type: null,
    visible: false,
  });

  useEffect(() => {
    if (toast.message) {
      snackbarRef.current?.show(toast.message, { duration: 2000 });
    }
  }, [snackbarRef, toast.message]);

  const showToast = (message: string, type: ToastType) => {
    setToast({
      message,
      type,
      visible: true,
    });
  };

  const hideToast = () => {
    setToast({
      message: '',
      type: null,
      visible: false,
    });
  };

  const currentType = useMemo(() => {
    return {
      success: {
        backgroundColor: 'green500',
      },
      error: {
        backgroundColor: 'red600',
      },
    }[toast.type ?? 'success'];
  }, [toast.type]);

  return (
    <ToastContext.Provider value={{ toast, showToast, hideToast }}>
      {children}
      <Snackbar
        ref={snackbarRef}
        bg={currentType.backgroundColor}
        m={0}
        rounded={0}
        justifyContent="flex-start"
        w="100%"
        p={16}
        fontSize={14}
        suffix={null}
        duration={2000}
      >
        {toast.message}
      </Snackbar>
    </ToastContext.Provider>
  );
};
