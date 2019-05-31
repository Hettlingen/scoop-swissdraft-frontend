/**
 * Created by martinbraun on 06.09.16.
 */

export class Showroom {

  private _id : number;
  private _name : string;


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
}
