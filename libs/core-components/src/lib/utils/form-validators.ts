import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function matchValidator(
  matchTo: string,
  reverse?: boolean,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const parent = control.parent as FormGroup;

    if (parent && reverse) {
      const c = parent.controls[matchTo];
      if (c) {
        c.updateValueAndValidity();
      }
      return null;
    }
    return !!parent &&
      !!parent.value &&
      control.value === parent.controls[matchTo].value
      ? null
      : { matching: true };
  };
}
