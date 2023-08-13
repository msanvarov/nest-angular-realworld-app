import { provideFileRouter } from '@analogjs/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AuthInterceptor } from '@starter/core-components';
import { BASE_PATH } from '@starter/realworld-oas';
import {
  ArticlesEffects,
  AuthEffects,
  UserEffects,
  articlesReducer,
  authReducer,
  userReducer,
} from '@starter/store';

const reducers = {
  auth: authReducer,
  articles: articlesReducer,
  user: userReducer,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideHttpClient(),
    provideClientHydration(),
    { provide: BASE_PATH, useValue: 'http://localhost:3333/api' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideStore(reducers),
    provideStoreDevtools(),
    provideEffects([AuthEffects, ArticlesEffects, UserEffects]),
  ],
};
