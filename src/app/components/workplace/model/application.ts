/**
 * Created by martinbraun on 06.09.16.
 */

export class Application {

  private _id : number;
  private _uuid: string;
  private _name : string;
  private _description : string;
  private _routerLink : string;

  constructor(id: number, name: string, description: string, routerLink: string) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._routerLink = routerLink;
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
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

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }
}
