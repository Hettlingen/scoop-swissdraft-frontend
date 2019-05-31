import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ROUTES_MODULE_SHOWROOM} from './showroom.routes';
import {SharedModule} from '../../utils/shared-modules/shared-modules';

/* Components */
import {ShowroomComponent} from './components/showroom/showroom.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {OrdersComponent} from './components/orders/orders.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import {ShowroomItemComponent} from './components/showroom-item/showroom-item.component';

/* Services */
import {ShoppingCartService} from '../order-management/services/shopping-cart.service';
import {ShowroomService} from './services/showroom.service';


@NgModule({
  declarations: [
    ShowroomComponent,
    ShowroomItemComponent,
    ShoppingCartComponent,
    OrdersComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ROUTES_MODULE_SHOWROOM
  ],
  providers: [
    ShoppingCartService,
    ShowroomService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ShowroomModule {

}
