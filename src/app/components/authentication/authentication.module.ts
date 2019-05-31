import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from '../utils/shared-modules/shared-modules';

import {UserRegistrationComponent} from './components/user-registration/user-registration.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UserPasswordRequestComponent} from './components/user-password-request/user-password-request.component';

import {LoginService} from './services/login.service';
import {RegistrationService} from './services/registration.service';
import {EmailValidator} from '../utils/validators/email-validator.directive';
import {PasswordEqualValidator} from '../utils/validators/password-equal-validator.directive';
import {ROUTES_MODULE_AUTHENTICATION} from './authentication.routes';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegistrationComponent,
    UserPasswordRequestComponent,
    UserProfileComponent,
    EmailValidator,
    PasswordEqualValidator
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ROUTES_MODULE_AUTHENTICATION
  ],
  providers: [
    LoginService,
    RegistrationService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [ UserLoginComponent ]
})

export class AuthenticationModule {

}
