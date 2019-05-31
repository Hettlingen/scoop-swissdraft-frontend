import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../../order-management/services/shopping-cart.service';
import {ShoppingCart} from '../../../order-management/model/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.component.html',
  styleUrls: ['shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: ShoppingCart;

  constructor(private serviceShoppingCart: ShoppingCartService) {}

  ngOnInit() {
    this.getShoppingCart();
  }

  getShoppingCart() {
    this.shoppingCart = this.serviceShoppingCart.getShoppingCart();
  }
}
