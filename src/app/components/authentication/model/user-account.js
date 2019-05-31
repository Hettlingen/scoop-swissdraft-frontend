"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by martinbraun on 04.10.16.
 */
class UserAccount {
    constructor() {
        this._listCredential = new Array();
        this._listRegistration = new Array();
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    get lastLogon() {
        return this._lastLogon;
    }
    set lastLogon(value) {
        this._lastLogon = value;
    }
    get lastLogoff() {
        return this._lastLogoff;
    }
    set lastLogoff(value) {
        this._lastLogoff = value;
    }
    get amountOfLogonAttempts() {
        return this._amountOfLogonAttempts;
    }
    set amountOfLogonAttempts(value) {
        this._amountOfLogonAttempts = value;
    }
    get dateCreatedAt() {
        return this._dateCreatedAt;
    }
    set dateCreatedAt(value) {
        this._dateCreatedAt = value;
    }
    get dateUpdatedAt() {
        return this._dateUpdatedAt;
    }
    set dateUpdatedAt(value) {
        this._dateUpdatedAt = value;
    }
    get listCredential() {
        return this._listCredential;
    }
    set listCredential(value) {
        this._listCredential = value;
    }
    get listRegistration() {
        return this._listRegistration;
    }
    set listRegistration(value) {
        this._listRegistration = value;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=user-account.js.map