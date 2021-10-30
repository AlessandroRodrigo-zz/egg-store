export interface CacheClientAdapter {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: any): Promise<void>;
  removeItem(key: string): Promise<void>;
}
