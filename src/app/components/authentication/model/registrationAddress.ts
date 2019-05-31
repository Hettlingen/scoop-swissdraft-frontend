/**
 * Created by martinbraun on 04.10.16.
 */

export class RegistrationAddress {

  private _id: number;
  private _street: string;
  private _streetNumber: string;
  private _postalCode: string;
  private _city: string;
  private _country: string;
  private _numberPhone: string;
  private _numberMobile: string;
  private _dateCreatedAt: Date;
  private _dateUpdatedAt: Date;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get streetNumber(): string {
    return this._streetNumber;
  }

  set streetNumber(value: string) {
    this._streetNumber = value;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  set postalCode(value: string) {
    this._postalCode = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get numberPhone(): string {
    return this._numberPhone;
  }

  set numberPhone(value: string) {
    this._numberPhone = value;
  }

  get numberMobile(): string {
    return this._numberMobile;
  }

  set numberMobile(value: string) {
    this._numberMobile = value;
  }
}
