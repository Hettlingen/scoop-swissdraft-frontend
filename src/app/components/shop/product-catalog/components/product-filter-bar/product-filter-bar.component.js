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
var ProductFilterBarComponent = /** @class */ (function () {
    function ProductFilterBarComponent() {
    }
    ProductFilterBarComponent.prototype.ngOnInit = function () {
    };
    ProductFilterBarComponent = __decorate([
        core_1.Component({
            selector: 'product-filter-bar',
            templateUrl: 'product-filter-bar.component.html',
            styleUrls: ['product-filter-bar.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ProductFilterBarComponent);
    return ProductFilterBarComponent;
}());
exports.ProductFilterBarComponent = ProductFilterBarComponent;
//# sourceMappingURL=product-filter-bar.component.js.map