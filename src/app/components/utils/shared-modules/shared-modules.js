"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by martinbraun on 25.12.16.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var banner_application_component_1 = require("../banner/views/banner-application/banner-application.component");
var banner_component_1 = require("../banner/views/banner/banner.component");
var banner_slideshow_component_1 = require("../banner/views/banner-slideshow/banner-slideshow.component");
var banner_movie_component_1 = require("../banner/views/banner_movie/banner-movie.component");
var loading_spinner_component_1 = require("../loading-spinner/loading-spinner.component");
var alert_component_1 = require("../error-handler/alert.component");
var snackbar_component_1 = require("../snackbar/snackbar.component");
var partner_filter_bar_component_1 = require("../../community/partner/components/partner-filter-bar/partner-filter-bar.component");
var product_filter_bar_component_1 = require("../../shop/product/views/product-filter-bar/product-filter-bar.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                banner_component_1.BannerComponent,
                banner_application_component_1.BannerApplicationComponent,
                banner_slideshow_component_1.BannerSlideshowComponent,
                banner_movie_component_1.BannerMovieComponent,
                loading_spinner_component_1.LoadingSpinnerComponent,
                alert_component_1.AlertComponent,
                snackbar_component_1.SnackbarComponent,
                partner_filter_bar_component_1.PartnerFilterBarComponent,
                product_filter_bar_component_1.ProductFilterBarComponent
            ],
            exports: [
                loading_spinner_component_1.LoadingSpinnerComponent,
                banner_component_1.BannerComponent,
                banner_application_component_1.BannerApplicationComponent,
                banner_slideshow_component_1.BannerSlideshowComponent,
                banner_movie_component_1.BannerMovieComponent,
                common_1.CommonModule,
                forms_1.FormsModule,
                alert_component_1.AlertComponent,
                snackbar_component_1.SnackbarComponent,
                partner_filter_bar_component_1.PartnerFilterBarComponent,
                product_filter_bar_component_1.ProductFilterBarComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared-modules.js.map
