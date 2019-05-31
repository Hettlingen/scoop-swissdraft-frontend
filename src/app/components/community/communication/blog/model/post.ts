import {Person} from '../../../partner/model/person';

export class Post {
  private _uuid: string;
  private _title: string;
  private _content: string;
  private _duration: number;
  private _datePublished: Date;
  private _dateCreated: Date;
  private _dateUpdated: Date;
  private _author: Person;
  private _listKeyword: Array<string> = new Array<string>();

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

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get dateCreated(): Date {
    return this._dateCreated;
  }

  set dateCreated(value: Date) {
    this._dateCreated = value;
  }

  get listKeyword(): Array<string> {
    return this._listKeyword;
  }

  set listKeyword(value: Array<string>) {
    this._listKeyword = value;
  }

  get author(): Person {
    return this._author;
  }

  set author(value: Person) {
    this._author = value;
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
}
