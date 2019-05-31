import {Person} from '../../../partner/model/person';
import {PostCategory} from './post-category';

export class Blog {
  private _uuid: string;
  private _title: string;
  private _description: string;
  private _datePublished: Date;
  private _dateCreated: Date;
  private _dateUpdated: Date;
  private _responsible: Person;

  private _listPostCategory: Array<PostCategory> = new Array<PostCategory>();

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dateCreated(): Date {
    return this._dateCreated;
  }

  set dateCreated(value: Date) {
    this._dateCreated = value;
  }

  get responsible(): Person {
    return this._responsible;
  }

  set responsible(value: Person) {
    this._responsible = value;
  }

  get dateUpdated(): Date {
    return this._dateUpdated;
  }

  set dateUpdated(value: Date) {
    this._dateUpdated = value;
  }

  get datePublished(): Date {
    return this._datePublished;
  }

  set datePublished(value: Date) {
    this._datePublished = value;
  }

  get listPostCategory(): Array<PostCategory> {
    return this._listPostCategory;
  }

  set listPostCategory(value: Array<PostCategory>) {
    this._listPostCategory = value;
  }
}
