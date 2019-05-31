import {Invoice} from "./correspondence/invoice";
import {PaymentReminder} from "./correspondence/payment-reminder";
/**
 * Created by martinbraun on 06.09.16.
 */

export class Order {

  private _id : number;
  private _name : string;
  private _description : string;

  private invoice : Invoice;
  private paymentReminder : PaymentReminder;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
