import { FormControl } from '@angular/forms';

export function validateEmail(control: FormControl) {

  const EMAIL_PATTERN = '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$';

  return control.value && control.value.match(EMAIL_PATTERN)
    ? null
    : {patternEmail: true}
}
