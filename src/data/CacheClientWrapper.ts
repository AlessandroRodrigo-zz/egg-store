import AsyncStorageAdaptee from './adaptees/AsyncStorageAdaptee';
import { CacheClientAdapter } from './adapters/CacheClientAdapter';

export default class CacheClientWrapper implements CacheClientAdapter {
  constructor(
    private cacheClient: CacheClientAdapter = new AsyncStorageAdaptee(),
  ) {
    this.cacheClient = cacheClient;
  }

  async removeItem(key: string): Promise<void> {
    await this.cacheClient.removeItem(key);
  }

  async getItem(key: string): Promise<string | null> {
    return this.cacheClient.getItem(key);
  }

  async setItem(key: string, value: any): Promise<void> {
    await this.cacheClient.setItem(key, value);
  }
}
