/**
 * Created by martinbraun on 06.09.16.
 */

export class Invoice {

  private _id : number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
