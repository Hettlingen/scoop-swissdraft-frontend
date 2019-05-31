/**
 * Created by martinbraun on 04.10.16.
 */

export class Credential {

  private _id: number;
  private _state: number; //1=preregistered, 2=active, 3=locked, 4=deleted
  private _dateCreatedAt: Date;
  private _dateUpdatedAt: Date;


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
