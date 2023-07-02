import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IUserResponseBody } from '@starter/api-types';
import { UserDto } from '@starter/realworld-oas';
import { editUser, selectAuthUser } from '@starter/store';

import { matchValidator } from '../utils/form-validators';

@Component({
  selector: 'starter-settings',
  templateUrl: './options.component.html',
})
export class OptionsComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  user$ = this.store.select(selectAuthUser);
  user: IUserResponseBody | null = null;

  userSubscription: Subscription = new Subscription(); // For handling the subscription

  profileForm = new FormGroup({
    bio: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });

  passwordForm = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(8),
      Validators.maxLength(25),
      matchValidator('confirmPassword', true),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      matchValidator('password'),
    ]),
  });

  ngOnInit() {
    this.userSubscription = this.user$.subscribe((user) => {
      if (user) {
        console.log('user', user);
        this.user = user;
        this.profileForm.patchValue({
          bio: user?.bio,
          email: user?.email,
          username: user?.username,
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  onSubmitProfile() {
    console.log('profileForm', this.profileForm);
    if (this.profileForm.valid) {
      const { bio, email, username } = this.profileForm.value;

      const payload: Partial<UserDto> = {};
      if (bio) {
        payload['bio'] = bio;
      }
      if (email) {
        payload['email'] = email;
      }
      if (username) {
        payload['username'] = username;
      }
      if (Object.keys(payload).length > 0) {
        this.store.dispatch(editUser({ user: payload }));
      }
    }
  }

  onSubmitPassword() {
    console.log('passwordForm', this.passwordForm);
    if (this.passwordForm.valid) {
      const { oldPassword, password, confirmPassword } =
        this.passwordForm.value;
      if (oldPassword && password && confirmPassword) {
        this.store.dispatch(editUser({ user: { password } }));
      }
    }
  }
}
