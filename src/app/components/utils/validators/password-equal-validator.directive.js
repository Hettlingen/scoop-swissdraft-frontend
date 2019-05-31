"use strict";
/**
 * Created by martinbraun on 11.12.16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var PasswordEqualValidator = /** @class */ (function () {
    function PasswordEqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    PasswordEqualValidator_1 = PasswordEqualValidator;
    PasswordEqualValidator.prototype.validate = function (control) {
        // self value (e.g. retype password)
        var v = control.value;
        // control value (e.g. password)
        var e = control.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    PasswordEqualValidator = PasswordEqualValidator_1 = __decorate([
        core_1.Directive({
            selector: '[passwordIsEqualValidator]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: PasswordEqualValidator_1, multi: true }]
        }),
        __param(0, core_1.Attribute('passwordIsEqualValidator')),
        __metadata("design:paramtypes", [String])
    ], PasswordEqualValidator);
    return PasswordEqualValidator;
    var PasswordEqualValidator_1;
}());
exports.PasswordEqualValidator = PasswordEqualValidator;
//# sourceMappingURL=password-equal-validator.directive.js.map