import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  listProduct: Observable<Product[]>;

  constructor(private serviceProduct: ProductService) {}

  ngOnInit() {
    this.listProduct = this.serviceProduct.getListProduct();
  }

  actionDelete(uuid: string) {
    this.serviceProduct.deleteProduct(uuid);
  }
}
