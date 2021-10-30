import { useContext } from 'react';
import { UserContext, UserContextData } from '../../contexts/user';

const useUser = (): UserContextData => {
  const userContext = useContext(UserContext);

  return userContext;
};

export default useUser;
