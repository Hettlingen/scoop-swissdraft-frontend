import {Post} from './post';

export class PostCategory {
  private _uuid : string;
  private _title : string;
  private _description : string;
  private _dateCreatedAt: Date;
  private _dateUpdatedAt: Date;

  private _listPost = new Array<Post>();


  get uuid(): string {
    return this._uuid;
  }

  set uuid(uuid: string) {
    this._uuid = uuid;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get amountOfPosts(): number {
    return this._listPost.length;
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

  get listPost(): Array<Post> {
    return this._listPost;
  }

  set listPost(listPost: Array<Post>) {
    this._listPost = listPost;
  }
}
