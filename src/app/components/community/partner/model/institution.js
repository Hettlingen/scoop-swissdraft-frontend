"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partner_1 = require("./partner");
/**
 * Created by martinbraun on 06.09.16.
 */
class Institution extends partner_1.Partner {
    constructor(uuid, name) {
        super(uuid);
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
exports.Institution = Institution;
//# sourceMappingURL=institution.js.map