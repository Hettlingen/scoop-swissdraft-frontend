import {Partner} from './partner';
/**
 * Created by martinbraun on 06.09.16.
 */

export class Person extends Partner {
  private _lastName: string;
  private _firstName: string;
  private _age: number;


  constructor(uuid: string, firstName: string, lastName: string) {
    super(uuid);
    this._lastName = lastName;
    this._firstName = firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }
}
