import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ListErrorsComponent } from '../../shared/list-errors.component';
import { Errors } from '../models/errors.model';
import { UserService } from '../services/user.service';

interface AuthForm {
  email: FormControl<string>;
  password: FormControl<string>;
  username?: FormControl<string>;
}

@Component({
  selector: 'starter-auth-page',
  templateUrl: './auth.component.html',
  imports: [RouterLink, NgIf, ListErrorsComponent, ReactiveFormsModule],
  standalone: true,
})
export class AuthComponent implements OnInit, OnDestroy {
  authType = '';
  title = '';
  errors: Errors = { errors: {} };
  isSubmitting = false;
  authForm: FormGroup<AuthForm>;
  destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {
    // use FormBuilder to create a form group
    this.authForm = new FormGroup<AuthForm>({
      email: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  ngOnInit(): void {
    const urlArray = this.route.snapshot.url;
    this.authType =
      urlArray &&
      urlArray[urlArray.length - 1] &&
      urlArray[urlArray.length - 1].path
        ? urlArray[urlArray.length - 1].path
        : 'login';
    this.title = this.authType === 'login' ? 'Sign in' : 'Sign up';
    if (this.authType === 'register') {
      this.authForm.addControl(
        'username',
        new FormControl('', {
          validators: [Validators.required],
          nonNullable: true,
        }),
      );
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    this.isSubmitting = true;
    this.errors = { errors: {} };

    const observable =
      this.authType === 'login'
        ? this.userService.login(
            this.authForm.value as { email: string; password: string },
          )
        : this.userService.register(
            this.authForm.value as {
              email: string;
              password: string;
              username: string;
            },
          );

    observable.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => void this.router.navigate(['/']),
      error: (err) => {
        this.errors = err;
        this.isSubmitting = false;
      },
    });
  }
}
