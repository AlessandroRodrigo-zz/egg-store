import React, { createContext, useCallback, useEffect, useState } from 'react';
import CacheClientWrapper from '../../../data/CacheClientWrapper';

interface User {
  id: string;
  name: string;
  email: string;
  imageProfile: string;
}

export interface UserContextData {
  user: User;
  signIn(user: User): void;
  signOut(): void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({
    email: '',
    id: '',
    imageProfile: '',
    name: '',
  });
  const cacheClient = new CacheClientWrapper();

  const getUser = useCallback(async (): Promise<void> => {
    const userLocal = await cacheClient.getItem('@user');

    if (userLocal) {
      setUser(JSON.parse(userLocal));
    }
  }, [cacheClient]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const signIn = useCallback(
    async (signInUser: User) => {
      setUser(signInUser);
      await cacheClient.setItem('@user', JSON.stringify(signInUser));
    },
    [cacheClient],
  );

  const signOut = useCallback(async () => {
    setUser({
      email: '',
      id: '',
      imageProfile: '',
      name: '',
    });
    await cacheClient.removeItem('@user');
  }, [cacheClient]);

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
