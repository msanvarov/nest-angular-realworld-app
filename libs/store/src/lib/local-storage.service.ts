import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Record<string, unknown>,
  ) {}

  retrieveEntry(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage[key];
    }
    return null;
  }

  persistEntry(key: string, value: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage[key] = value;
      return true;
    }
    return false;
  }

  removeEntry(key: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.removeItem(key);
      return true;
    }
    return false;
  }
}
