"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(serviceShoppingCart) {
        this.serviceShoppingCart = serviceShoppingCart;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.getShoppingCart();
    };
    ShoppingCartComponent.prototype.getShoppingCart = function () {
        this.shoppingCart = this.serviceShoppingCart.getShoppingCart();
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-shopping-cart',
            templateUrl: 'shopping-cart.component.html',
            styleUrls: ['shopping-cart.component.css']
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
