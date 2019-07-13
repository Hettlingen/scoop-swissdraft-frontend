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
/**
 * Created by martinbraun on 08.03.17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("../../authentication/services/login.service");
var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoggedInGuard.prototype.canActivate = function (route, state) {
        //return this.loginService.isLoggedIn();
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    LoggedInGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, login_service_1.LoginService])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
exports.LoggedInGuard = LoggedInGuard;
//# sourceMappingURL=LoggedInGuard.js.map