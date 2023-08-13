import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import {
  AuthErrorCodesEnum,
  register,
  selectAuthError,
  selectAuthLoading,
  selectAuthUser,
} from '@starter/store';

@Component({
  selector: 'starter-registration-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit, OnDestroy {
  constructor(private store: Store, private router: Router) {}

  user$ = this.store.select(selectAuthUser);
  error$ = this.store.select(selectAuthError);
  loading$ = this.store.select(selectAuthLoading);
  registrationFailedCode = AuthErrorCodesEnum.REGISTRATION_FAILURE;
  displayPassword = false;

  userSubscription: Subscription = new Subscription(); // For handling the subscription

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
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
    console.log('registerForm', this.registerForm);
    if (this.registerForm.valid) {
      const { email, password, username } = this.registerForm.value;
      if (email && username && password && password) {
        this.store.dispatch(register({ email, username, password }));
      }
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
