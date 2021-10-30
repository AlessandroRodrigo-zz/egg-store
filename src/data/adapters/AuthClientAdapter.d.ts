import User from '../../domain/models/User';

export interface AuthClientAdapter {
  getCurrentUserAuthenticated(): Promise<User | null>;
  signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null>;
  createUserWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null>;
}
