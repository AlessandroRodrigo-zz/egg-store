/* eslint-disable class-methods-use-this */
import * as GoogleAuthentication from 'expo-google-app-auth';
import * as FacebookAuthentication from 'expo-facebook';
import { OAUTH_CLIENT_ID, FACEBOOK_APP_ID } from '@env';
import Firebase from 'firebase/app';

class AuthService {
  getCurrentUserAuthenticated() {
    const user = Firebase.auth().currentUser;

    return user;
  }

  async signInWithGoogle(): Promise<Firebase.auth.UserCredential | null> {
    const logInResult = await GoogleAuthentication.logInAsync({
      androidClientId: OAUTH_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (logInResult.type === 'success') {
      const credential = Firebase.auth.GoogleAuthProvider.credential(
        logInResult.idToken,
        logInResult.accessToken,
      );
      const user = await Firebase.auth().signInWithCredential(credential);

      return user;
    }

    if (logInResult.type === 'cancel') {
      return null;
    }

    return null;
  }

  async signInWithFacebook() {
    await FacebookAuthentication.initializeAsync({ appId: FACEBOOK_APP_ID });

    const loged = await FacebookAuthentication.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (loged.type === 'success') {
      const credential = Firebase.auth.FacebookAuthProvider.credential(
        loged.token,
      );
      const user = await Firebase.auth().signInWithCredential(credential);

      return user;
    }

    if (loged.type === 'cancel') {
      return null;
    }

    return null;
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    const user = await Firebase.auth().signInWithEmailAndPassword(
      email,
      password,
    );

    return user;
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    const user = await Firebase.auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    return user;
  }
}

export default new AuthService();
