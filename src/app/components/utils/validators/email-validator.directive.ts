/**
 * Created by martinbraun on 11.12.16.
 */

import {Directive, OnChanges, SimpleChanges, Input, Attribute} from '@angular/core';
import {NG_VALIDATORS, Validator, Validators, AbstractControl} from "@angular/forms";

@Directive({
  selector: '[emailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true}]
})
export class EmailValidator implements Validator {

  private emailPattern = "^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-zA-Z0–9-.]+$";

  validate(control: AbstractControl): {[key: string]: any} {
    if(control.value && !control.value.equals(this.emailPattern)){
      return {'emailValidator': control.value};
    }

    return null;
  }
}
