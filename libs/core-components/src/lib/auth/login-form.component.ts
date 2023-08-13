import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import {
  AuthErrorCodesEnum,
  login,
  selectAuthError,
  selectAuthLoading,
  selectAuthUser,
} from '@starter/store';

@Component({
  selector: 'starter-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit, OnDestroy {
  constructor(private store: Store, private router: Router) {}

  user$ = this.store.select(selectAuthUser);
  error$ = this.store.select(selectAuthError);
  loading$ = this.store.select(selectAuthLoading);
  loginFailedCode = AuthErrorCodesEnum.LOGIN_FAILURE;
  displayPassword = false;

  userSubscription: Subscription = new Subscription(); // For handling the subscription

  loginForm = new FormGroup({
    email: new FormControl('mcoute@grr.la', Validators.required),
    password: new FormControl('Mcoute25011313', Validators.required),
  });

  ngOnInit() {
    this.userSubscription = this.user$.subscribe((user) => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  toggleDisplayPassword() {
    this.displayPassword = !this.displayPassword;
  }

  onSubmit() {
    console.log('loginForm', this.loginForm);
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (email && password) this.store.dispatch(login({ email, password }));
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
