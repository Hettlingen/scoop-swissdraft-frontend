import {RegistrationAddress} from "./registrationAddress";
/**
 * Created by martinbraun on 04.10.16.
 */

export class Registration {

  private _id: number;
  private _dateCreatedAt: Date;
  private _dateUpdatedAt: Date;
  private _state: number;   //1=preregistered, 2=active, 3=locked, 4=deleted

  private _registrationAddress: RegistrationAddress;

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

  get state(): number {
    return this._state;
  }

  set state(value: number) {
    this._state = value;
  }

  get registrationAddress(): RegistrationAddress {
    return this._registrationAddress;
  }

  set registrationAddress(value: RegistrationAddress) {
    this._registrationAddress = value;
  }
}
