import {FormControl, FormGroup} from '@angular/forms';

export function validatePasswordEqual(formGroup: FormGroup) {

  let inputPassword = formGroup.get('password').value;
  let inputPasswordConfirm = formGroup.get('passwordConfirm').value;

  if (inputPassword != null && inputPassword != inputPasswordConfirm) {
    return {errorPasswordEqual: true};
  }

  return null;
}
