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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var AlertService_1 = require("../../../utils/error-handler/AlertService");
var UserPasswordRequestComponent = /** @class */ (function () {
    function UserPasswordRequestComponent(route, router, serviceLogin, serviceAlert, formBuilder) {
        this.route = route;
        this.router = router;
        this.serviceLogin = serviceLogin;
        this.serviceAlert = serviceAlert;
        this.formBuilder = formBuilder;
        this.loading = false;
    }
    UserPasswordRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formPasswordRequest = this.formBuilder.group({
            'email': [null, [forms_1.Validators.required]]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    };
    UserPasswordRequestComponent.prototype.passwordRequest = function () {
        var _this = this;
        this.loading = true;
        this.serviceLogin
            .login(this.formPasswordRequest.value)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.serviceAlert.error(error);
        });
    };
    UserPasswordRequestComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof router_1.NavigationStart) {
            this.loading = true;
        }
        if (event instanceof router_1.NavigationEnd) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof router_1.NavigationError) {
            this.loading = false;
        }
    };
    UserPasswordRequestComponent = __decorate([
        core_1.Component({
            selector: 'app-user-password-request',
            templateUrl: 'user-password-request.component.html',
            styleUrls: ['user-password-request.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            login_service_1.LoginService,
            AlertService_1.AlertService,
            forms_1.FormBuilder])
    ], UserPasswordRequestComponent);
    return UserPasswordRequestComponent;
}());
exports.UserPasswordRequestComponent = UserPasswordRequestComponent;
//# sourceMappingURL=user-password-request.component.js.map