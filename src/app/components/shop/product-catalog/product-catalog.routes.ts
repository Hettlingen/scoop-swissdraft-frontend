/**
 * Created by martinbraun on 20.09.16.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product/product.component';
import {PartnerListComponent} from '../../community/partner/components/partner-list';
import {LoggedInGuard} from '../../utils/guards/LoggedInGuard';



export const ROUTES_CONFIG_PRODUCT: Routes = [
    { path: 'products',
      component: ProductListComponent,
      canActivate: [LoggedInGuard]},
    { path: 'products/:uuid', component: ProductComponent },
    { path: 'products/add', component: ProductComponent }
];

export const ROUTES_MODULE_PRODUCT: ModuleWithProviders = RouterModule.forChild(ROUTES_CONFIG_PRODUCT);

