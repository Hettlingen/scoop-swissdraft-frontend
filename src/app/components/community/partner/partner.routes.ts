import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {PartnerListComponent} from './components/partner-list/partner-list.component';
import {FriendsComponent} from './components/friends/friends.component';



export const ROUTES_CONFIG_PARTNER: Routes = [
  { path: 'partner',
    component: PartnerListComponent},

  { path: 'friends',
    component: FriendsComponent}
];

export const ROUTES_MODULE_PARTNER: ModuleWithProviders = RouterModule.forChild(ROUTES_CONFIG_PARTNER);

