"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(control) {
    var EMAIL_PATTERN = '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$';
    return control.value && control.value.match(EMAIL_PATTERN)
        ? null
        : { patternEmail: true };
}
exports.validateEmail = validateEmail;
//# sourceMappingURL=email-validator.js.map