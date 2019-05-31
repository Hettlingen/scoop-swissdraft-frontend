import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RegistrationService} from '../../services/registration.service';
import {UserAccount} from '../../model/user-account';
import {AlertService} from '../../../utils/error-handler/AlertService';
import {Router} from '@angular/router';
import { validateEmail } from '../../../../components/utils/validators/email-validator'
import { validatePasswordEqual } from '../../../../components/utils/validators/password-equal-validator'

@Component({
  selector: 'app-user-registration',
  templateUrl: 'user-registration.component.html',
  styleUrls: ['user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  public formRegistration: FormGroup;
  public loading = false;
  public snackbarText: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private serviceRegistration: RegistrationService,
              private serviceAlert: AlertService) {
  }

  ngOnInit() {
    this.formRegistration = this.formBuilder.group({
      'userName' : [null, [Validators.required, Validators.minLength(5)]],
      'email' : [null, [Validators.required, validateEmail]],
      passwordGroup: this.formBuilder.group({
        'password' : [null, [Validators.required, Validators.minLength(5)]],
        'passwordConfirm' : [null, [Validators.required]]
      }, {validator: validatePasswordEqual})
    })
  }

  actionRegister() {
    this.loading = true;

    this.serviceRegistration
      .registerUser(this.formRegistration.value)
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.loading = false;
          this.serviceAlert.success('Du hast dich erfolgreich registriert.', true);
          this.router.navigate(['login']);
        },
        error => {
          //TODO Evaluate error code and use appropriate messages
          this.serviceAlert.error("Zur Zeit können Sie sich nicht registrieren. Versuchen Sie es später nochmals.");
          this.loading = false;
        });
  }
}
