"use strict";
/**
 * Created by martinbraun on 04.10.16.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Credential {
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
}
exports.Credential = Credential;
//# sourceMappingURL=credential.js.map