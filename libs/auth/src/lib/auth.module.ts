import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from '@starter/material-design';
import { Store } from '@starter/store';
import { UsersService } from '@starter/users';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'auth',
        // canActivate: [NoAuthGuard],
        /* A guard that prevents the user from accessing the login page if they are already logged in. */
        // canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
          layout: 'empty',
        },
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'login' },
          {
            path: 'login',
            loadChildren: () =>
              import('./login/login.module').then(
                (loginModule) => loginModule.LoginModule,
              ),
          },
          {
            path: 'register',
            loadChildren: () =>
              import('./register/register.module').then(
                (registerModule) => registerModule.RegisterModule,
              ),
          },
        ],
      },
    ]),
  ],
  providers: [Store, AuthService, UsersService],
  declarations: [],
})
export class AuthModule {}
