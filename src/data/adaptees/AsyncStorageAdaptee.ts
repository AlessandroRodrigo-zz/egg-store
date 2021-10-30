import AsyncStorage from '@react-native-async-storage/async-storage';
import { CacheClientAdapter } from '../adapters/CacheClientAdapter';

export default class AsyncStorageAdaptee implements CacheClientAdapter {
  async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  async getItem(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  async setItem(key: string, value: any): Promise<void> {
    await AsyncStorage.setItem(key, value);
  }
}
