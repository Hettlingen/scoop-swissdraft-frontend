"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var registration_service_1 = require("../../services/registration.service");
var AlertService_1 = require("../../../utils/error-handler/AlertService");
var router_1 = require("@angular/router");
var email_validator_1 = require("../../../../components/utils/validators/email-validator");
var password_equal_validator_1 = require("../../../../components/utils/validators/password-equal-validator");
var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(formBuilder, router, serviceRegistration, serviceAlert) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.serviceRegistration = serviceRegistration;
        this.serviceAlert = serviceAlert;
        this.loading = false;
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        this.formRegistration = this.formBuilder.group({
            'userName': [null, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            'email': [null, [forms_1.Validators.required, email_validator_1.validateEmail]],
            passwordGroup: this.formBuilder.group({
                'password': [null, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
                'passwordConfirm': [null, [forms_1.Validators.required]]
            }, { validator: password_equal_validator_1.validatePasswordEqual })
        });
    };
    UserRegistrationComponent.prototype.actionRegister = function () {
        var _this = this;
        this.loading = true;
        this.serviceRegistration
            .registerUser(this.formRegistration.value)
            .subscribe(function (data) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            _this.loading = false;
            _this.serviceAlert.success('Du hast dich erfolgreich registriert.', true);
            _this.router.navigate(['login']);
        }, function (error) {
            //TODO Evaluate error code and use appropriate messages
            _this.serviceAlert.error("Zur Zeit können Sie sich nicht registrieren. Versuchen Sie es später nochmals.");
            _this.loading = false;
        });
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-user-registration',
            templateUrl: 'user-registration.component.html',
            styleUrls: ['user-registration.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router,
            registration_service_1.RegistrationService,
            AlertService_1.AlertService])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=user-registration.component.js.map