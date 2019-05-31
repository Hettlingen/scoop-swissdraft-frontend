import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../../../utils/shared-modules/shared-modules';
import {ROUTES_MODULE_NOTIFICATIONS} from './notifications.routes';
import {NotificationsComponent} from './components/notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTES_MODULE_NOTIFICATIONS,
    SharedModule
  ],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
