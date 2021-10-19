import React, { createContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  imageProfile: string;
}

export interface UserContextData {
  user: User;
  signIn(user: Partial<User>): void;
  signOut(): void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Partial<User>>({
    email: '',
    id: '',
    imageProfile: '',
    name: '',
  });

  const signIn = (signInUser: Partial<User>) => {
    setUser(signInUser);
  };

  const signOut = () => {
    setUser({
      email: '',
      id: '',
      imageProfile: '',
      name: '',
    });
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
