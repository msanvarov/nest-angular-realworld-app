import { InjectionToken } from '@angular/core';

export const FUSE_APP_CONFIG = new InjectionToken<Record<string, unknown>>(
  'FUSE_APP_CONFIG',
);
