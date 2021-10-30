import User from '../domain/models/User';
import { AuthClientAdapter } from './adapters/AuthClientAdapter';

export default class AuthClient implements AuthClientAdapter {
  constructor(private authClient: AuthClientAdapter) {
    this.authClient = authClient;
  }

  async getCurrentUserAuthenticated(): Promise<User | null> {
    return this.authClient.getCurrentUserAuthenticated();
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    return this.authClient.signInWithEmailAndPassword(email, password);
  }

  async createUserWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    return this.authClient.createUserWithEmailAndPassword(email, password);
  }
}
