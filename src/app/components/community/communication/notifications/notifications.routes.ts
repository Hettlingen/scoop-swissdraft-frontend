import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {NotificationsComponent} from './components/notifications/notifications.component';


export const ROUTES_CONFIG_NOTIFICATIONS: Routes = [
    { path: 'notifications',
      component: NotificationsComponent },
];

export const ROUTES_MODULE_NOTIFICATIONS: ModuleWithProviders = RouterModule.forChild(ROUTES_CONFIG_NOTIFICATIONS);

