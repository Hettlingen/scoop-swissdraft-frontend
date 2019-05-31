import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES_MODULE_PARTNER } from './partner.routes';
import {SharedModule} from '../../utils/shared-modules/shared-modules';

/* Components */
import {PartnerListComponent} from './components/partner-list/partner-list.component';

/* Services */
import {PartnerService} from './services/partner.service';
import { FriendsComponent } from './components/friends/friends.component';

@NgModule({
  declarations: [
    PartnerListComponent,
    FriendsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ROUTES_MODULE_PARTNER
  ],
  providers: [
    PartnerService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PartnerModule {

}
