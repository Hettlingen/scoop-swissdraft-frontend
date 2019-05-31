import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserPasswordRequestComponent } from './components/user-password-request/user-password-request.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {LoggedInGuard} from '../utils/guards/LoggedInGuard';


export const ROUTES_CONFIG_AUTHENTICATION: Routes = [
    { path: 'login',
      component: UserLoginComponent },

    { path: 'register',
      component: UserRegistrationComponent },

    { path: 'resetPassword',
      component: UserPasswordRequestComponent },

    { path: 'userProfile',
      component: UserProfileComponent,
      canActivate: [LoggedInGuard]}
];

export const ROUTES_MODULE_AUTHENTICATION: ModuleWithProviders = RouterModule.forChild(ROUTES_CONFIG_AUTHENTICATION);

