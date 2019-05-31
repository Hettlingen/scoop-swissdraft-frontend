/**
 * Created by martinbraun on 11.12.16.
 */

import {Directive, OnChanges, SimpleChanges, Input, Attribute} from '@angular/core';
import {NG_VALIDATORS, Validator, Validators, AbstractControl} from "@angular/forms";

@Directive({
  selector: '[passwordIsEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordEqualValidator, multi: true}]
})
export class PasswordEqualValidator implements Validator {

  constructor( @Attribute('passwordIsEqualValidator') public validateEqual: string) {}

  validate(control: AbstractControl): {[p: string]: any} {
    // self value (e.g. retype password)
    let v = control.value;

    // control value (e.g. password)
    let e = control.root.get(this.validateEqual);

    // value not equal
    if (e && v !== e.value) return {
      validateEqual: false
    }

    return null;
  }
}
