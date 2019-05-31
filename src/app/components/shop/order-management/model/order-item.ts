import {Product} from '../../product-catalog/model/product';

export class OrderItem {

  private _id : number;
  private _quantity: number = 1;
  private _product: Product;

  constructor(id: number, product: Product, quantity: number) {
    this._id = id;
    this._product = product;
    this._quantity = quantity;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }
}
