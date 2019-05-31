"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validatePasswordEqual(formGroup) {
    var inputPassword = formGroup.get('password').value;
    var inputPasswordConfirm = formGroup.get('passwordConfirm').value;
    if (inputPassword != null && inputPassword != inputPasswordConfirm) {
        return { errorPasswordEqual: true };
    }
    return null;
}
exports.validatePasswordEqual = validatePasswordEqual;
//# sourceMappingURL=password-equal-validator.js.map