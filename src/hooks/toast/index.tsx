import { useContext } from 'react';
import { ToastContext, ToastContextData } from '../../contexts/toast';

const useToast = (): ToastContextData => {
  const contextToast = useContext(ToastContext);

  return contextToast;
};

export default useToast;
