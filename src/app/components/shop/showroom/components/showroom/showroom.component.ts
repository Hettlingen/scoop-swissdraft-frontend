import { Component, OnInit } from '@angular/core';
import {ShowroomService} from '../../services/showroom.service';
import {Product} from '../../../product-catalog/model/product';
import {PRODUCTS} from '../../../../../../assets/mockdata/shop/mockdata-product';


@Component({
  selector: 'app-showroom',
  templateUrl: 'showroom.component.html',
  styleUrls: ['showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  private listProduct: Array<Product>;

  constructor(private serviceShowroom: ShowroomService) { }

  ngOnInit() {
    this.listProduct = PRODUCTS;
    // this.listProduct = this.serviceShowroom.getListProduct();
  }
}
