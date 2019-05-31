import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*
 * Platform and Environment providers/directives/pipes
 */
import {SharedModule} from '../../utils/shared-modules/shared-modules';

/* Components */
import {ROUTES_MODULE_PRODUCT} from './product-catalog.routes';
import {ProductComponent} from './components/product/product.component';

/* Services */
import {ProductService} from './services/product.service';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductFilterBarComponent} from './components/product-filter-bar/product-filter-bar.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductFilterBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ROUTES_MODULE_PRODUCT
  ],
  providers: [
    ProductService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ProductCatalogModule {

}
