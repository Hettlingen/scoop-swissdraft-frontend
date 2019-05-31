"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partner_1 = require("./partner");
/**
 * Created by martinbraun on 06.09.16.
 */
class Person extends partner_1.Partner {
    constructor(uuid, firstName, lastName) {
        super(uuid);
        this._lastName = lastName;
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map