/**
 * Created by martinbraun on 20.09.16.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {ShowroomComponent} from './components/showroom/showroom.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import {OrdersComponent} from './components/orders/orders.component';
import {ShowroomItemComponent} from './components/showroom-item/showroom-item.component';
import {LoggedInGuard} from '../../utils/guards/LoggedInGuard';


export const ROUTES_CONFIG_SHOWROOM: Routes = [
  { path: 'showroom',
    component: ShowroomComponent},
  { path: 'showroomProductItem/:id',
    component: ShowroomItemComponent},
  { path: 'shoppingCart',
    component: ShoppingCartComponent},
  { path: 'wishList',
    component: WishlistComponent},
  { path: 'orders',
    component: OrdersComponent}
];

export const ROUTES_MODULE_SHOWROOM: ModuleWithProviders = RouterModule.forChild(ROUTES_CONFIG_SHOWROOM);

