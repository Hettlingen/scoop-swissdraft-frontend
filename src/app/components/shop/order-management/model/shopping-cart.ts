import {OrderItem} from "./order-item";
/**
 * Created by martinbraun on 06.09.16.
 */

export class ShoppingCart {

  private _id : number;
  private _listOrderItem : Array<OrderItem>;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get listOrderItem(): Array<OrderItem> {
    return this._listOrderItem;
  }

  set listOrderItem(listOrderItem: Array<OrderItem>) {
    this._listOrderItem = listOrderItem;
  }
}
