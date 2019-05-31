import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {AlertService} from '../../../utils/error-handler/AlertService';
import {UserAccount} from '../../model/user-account';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public formUserProfileUserAddress: FormGroup;
  public formUserProfileUserCredentials: FormGroup;
  private userAccount: UserAccount;

  constructor(private formBuilder: FormBuilder,
              private serviceLogin: LoginService,
              private serviceAlert: AlertService) {
  }

  ngOnInit() {
    this.formUserProfileUserAddress = this.formBuilder.group({
      'gender' : [null, []],
      'lastName' : [null, []],
      'firstName' : [null, []],
      'street' : [null, []],
      'streetNumber' : [null, []],
      'postalCode' : [null, []],
      'city' : [null, []],
      'country' : [null, []],
      'numberMobile' : [null, []],
    })

    this.formUserProfileUserCredentials = this.formBuilder.group({
      'email' : [null, [Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
      'userName' : [null, [Validators.required, Validators.minLength(5)]],
      'password' : [null, [Validators.required, Validators.minLength(5)]]
    })
  }

  actionSaveUserAddress() {
    this.serviceLogin
      .saveUserProfile(this.formUserProfileUserCredentials.value)
      .subscribe((data:UserAccount) => this.userAccount = data,
        error => console.log(error),
        () => this.serviceAlert.success('Registration Successful', true));
  }

  actionSaveUserCredentials() {
    this.serviceLogin
      .saveUserProfile(this.formUserProfileUserCredentials.value)
      .subscribe((data:UserAccount) => this.userAccount = data,
        error => console.log(error),
        () => this.serviceAlert.success('Registration Successful', true));
  }
}
