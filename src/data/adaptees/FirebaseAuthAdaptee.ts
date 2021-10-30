import Firebase from 'firebase/app';
import UserFactory from '../../domain/factories/UserFactory';
import User from '../../domain/models/User';
import { AuthClientAdapter } from '../adapters/AuthClientAdapter';

export default class FirebaseAuthAdaptee implements AuthClientAdapter {
  async getCurrentUserAuthenticated(): Promise<User | null> {
    const user = Firebase.auth().currentUser;

    return UserFactory.create({
      email: user?.email || '',
      id: user?.uid || '',
      imageProfile: user?.photoURL || '',
      name: user?.displayName || '',
    });
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    const { user } = await Firebase.auth().signInWithEmailAndPassword(
      email,
      password,
    );

    return UserFactory.create({
      email: user?.email || '',
      id: user?.uid || '',
      imageProfile: user?.photoURL || '',
      name: user?.displayName || '',
    });
  }

  async createUserWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    const { user } = await Firebase.auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    return UserFactory.create({
      email: user?.email || '',
      id: user?.uid || '',
      imageProfile: user?.photoURL || '',
      name: user?.displayName || '',
    });
  }
}
