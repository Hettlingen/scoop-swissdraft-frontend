/**
 * Created by martinbraun on 06.09.16.
 */

export class Partner {

  private _uuid: string;

  constructor(uuid: string) {
    this._uuid = uuid;
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(uuid: string) {
    this._uuid = uuid;
  }
}
