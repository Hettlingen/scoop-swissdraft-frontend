import {Credential} from "./credential";
import {Registration} from "./registration";
/**
 * Created by martinbraun on 04.10.16.
 */

export class UserAccount {

  private _id: number;
  private _state: number;  //1=preregistered, 2=active, 3=locked, 4=deleted
  private _lastLogon: Date;
  private _lastLogoff: Date;
  private _dateCreatedAt: Date;
  private _dateUpdatedAt: Date;
  private _amountOfLogonAttempts: number;

  private _listCredential = new Array<Credential>();
  private _listRegistration = new Array<Registration>();

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get state(): number {
    return this._state;
  }

  set state(value: number) {
    this._state = value;
  }

  get lastLogon(): Date {
    return this._lastLogon;
  }

  set lastLogon(value: Date) {
    this._lastLogon = value;
  }

  get lastLogoff(): Date {
    return this._lastLogoff;
  }

  set lastLogoff(value: Date) {
    this._lastLogoff = value;
  }

  get amountOfLogonAttempts(): number {
    return this._amountOfLogonAttempts;
  }

  set amountOfLogonAttempts(value: number) {
    this._amountOfLogonAttempts = value;
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

  get listCredential(): Credential[] {
    return this._listCredential;
  }

  set listCredential(value: Credential[]) {
    this._listCredential = value;
  }

  get listRegistration(): Registration[] {
    return this._listRegistration;
  }

  set listRegistration(value: Registration[]) {
    this._listRegistration = value;
  }
}
