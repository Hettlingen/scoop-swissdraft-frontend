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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
        this.emailPattern = "^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-zA-Z0–9-.]+$";
    }
    EmailValidator_1 = EmailValidator;
    EmailValidator.prototype.validate = function (control) {
        if (control.value && !control.value.equals(this.emailPattern)) {
            return { 'emailValidator': control.value };
        }
        return null;
    };
    EmailValidator = EmailValidator_1 = __decorate([
        core_1.Directive({
            selector: '[emailValidator]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: EmailValidator_1, multi: true }]
        })
    ], EmailValidator);
    return EmailValidator;
    var EmailValidator_1;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email-validator.directive.js.map