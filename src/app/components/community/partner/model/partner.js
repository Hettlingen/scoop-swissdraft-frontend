"use strict";
/**
 * Created by martinbraun on 06.09.16.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Partner {
    constructor(uuid) {
        this._uuid = uuid;
    }
    get uuid() {
        return this._uuid;
    }
    set uuid(uuid) {
        this._uuid = uuid;
    }
}
exports.Partner = Partner;
//# sourceMappingURL=partner.js.map