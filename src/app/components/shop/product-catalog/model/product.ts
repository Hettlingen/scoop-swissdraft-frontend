/**
 * Created by martinbraun on 06.09.16.
 */

export class Product {

  private _id: number;
  private _uuid: string;
  private _number: number;
  private _name: string;
  private _description: string;
  private _price: number;
  private _amountOfItem: number;
  private _dateCreatedAt: Date;
  private _dateUpdatedAt: Date;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

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

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get amountOfItem(): number {
    return this._amountOfItem;
  }

  set amountOfItem(value: number) {
    this._amountOfItem = value;
  }

  get dateCreatedAt(): Date {
    return this._dateCreatedAt;
  }

  set dateCreatedAt(value: Date) {
    this._dateCreatedAt = value;
  }

  get dateUpdatedAt(): Date {
    return this._dateUpdatedAt;
  }

  set dateUpdatedAt(value: Date) {
    this._dateUpdatedAt = value;
  }
}
