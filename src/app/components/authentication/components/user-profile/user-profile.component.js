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
var login_service_1 = require("../../services/login.service");
var forms_1 = require("@angular/forms");
var AlertService_1 = require("../../../utils/error-handler/AlertService");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(formBuilder, serviceLogin, serviceAlert) {
        this.formBuilder = formBuilder;
        this.serviceLogin = serviceLogin;
        this.serviceAlert = serviceAlert;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.formUserProfileUserAddress = this.formBuilder.group({
            'gender': [null, []],
            'lastName': [null, []],
            'firstName': [null, []],
            'street': [null, []],
            'streetNumber': [null, []],
            'postalCode': [null, []],
            'city': [null, []],
            'country': [null, []],
            'numberMobile': [null, []],
        });
        this.formUserProfileUserCredentials = this.formBuilder.group({
            'email': [null, [forms_1.Validators.required, forms_1.Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
            'userName': [null, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            'password': [null, [forms_1.Validators.required, forms_1.Validators.minLength(5)]]
        });
    };
    UserProfileComponent.prototype.actionSaveUserAddress = function () {
        var _this = this;
        this.serviceLogin
            .saveUserProfile(this.formUserProfileUserCredentials.value)
            .subscribe(function (data) { return _this.userAccount = data; }, function (error) { return console.log(error); }, function () { return _this.serviceAlert.success('Registration Successful', true); });
    };
    UserProfileComponent.prototype.actionSaveUserCredentials = function () {
        var _this = this;
        this.serviceLogin
            .saveUserProfile(this.formUserProfileUserCredentials.value)
            .subscribe(function (data) { return _this.userAccount = data; }, function (error) { return console.log(error); }, function () { return _this.serviceAlert.success('Registration Successful', true); });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: 'user-profile.component.html',
            styleUrls: ['user-profile.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            login_service_1.LoginService,
            AlertService_1.AlertService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map