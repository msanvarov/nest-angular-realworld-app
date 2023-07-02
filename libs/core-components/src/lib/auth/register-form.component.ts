import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { register } from '@starter/store';

@Component({
  selector: 'starter-registration-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  constructor(private store: Store) {}

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log('registerForm', this.registerForm);
    if (this.registerForm.valid) {
      const { email, password, username, confirmPassword } =
        this.registerForm.value;
      if (email && username && password && password === confirmPassword) {
        this.store.dispatch(register({ email, username, password }));
      }
    }
  }
}
