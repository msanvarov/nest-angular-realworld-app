import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { fuseAnimations } from '@starter/animations';
import { FuseAlertType } from '@starter/ui-types';

@Component({
  selector: 'starter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class LoginComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm?: NgForm;

  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: '',
  };
  signInForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl(),
  });
  showAlert = false;

  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.signInForm = this._formBuilder.group({
      email: ['sal@dezzign.studio', [Validators.required, Validators.email]],
      password: ['S123456789', Validators.required],
      rememberMe: [''],
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   */
  signIn(): void {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    // Disable the form
    this.signInForm.disable();

    // Hide the alert
    this.showAlert = false;

    // Login logic
    setTimeout(() => {
      // Set the redirect url.
      // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
      // to the correct page after a successful sign in. This way, that url can be set via
      // routing file and we don't have to touch here.
      const redirectURL =
        this._activatedRoute.snapshot.queryParamMap.get('redirectURL') ||
        '/signed-in-redirect';

      // Navigate to the redirect url
      this._router.navigateByUrl(redirectURL);

      // Re-enable the form
      this.signInForm.enable();

      // Reset the form
      this.signInNgForm?.resetForm();

      // Set the alert
      this.alert = {
        type: 'error',
        message: 'Wrong email or password',
      };

      // Show the alert
      this.showAlert = true;
    }, 1000);
  }
}
