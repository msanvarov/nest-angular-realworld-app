import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// import { localStorageSync } from 'ngrx-store-localstorage';
import { BASE_PATH } from '@starter/realworld-oas';
import {
  ArticlesEffects,
  AuthEffects,
  UserEffects,
  articlesReducer,
  authReducer,
  userReducer,
} from '@starter/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideHttpClient(),
    provideClientHydration(),
    { provide: BASE_PATH, useValue: 'http://localhost:3333/api' },
    provideStore({
      auth: authReducer,
      articles: articlesReducer,
      user: userReducer,
    }),
    provideStoreDevtools(),
    provideEffects([AuthEffects, ArticlesEffects, UserEffects]),
  ],
};
