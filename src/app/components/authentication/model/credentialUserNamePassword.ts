import {Credential} from "./credential";
/**
 * Created by martinbraun on 04.10.16.
 */

export class CredentialUserNamePassword extends Credential {

  private _userName: string;
  private _password: string;

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
