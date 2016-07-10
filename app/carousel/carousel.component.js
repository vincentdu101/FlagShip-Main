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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var carousel_1 = require("ng2-bootstrap/components/carousel");
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.intervalChange = 5000;
        this.slides = [];
        this.slides = [
            { text: "Innovation", image: "app/images/slides/innovation.jpg" },
            { text: "Experience" },
            { text: "Passion" }
        ];
    }
    CarouselComponent = __decorate([
        core_1.Component({
            selector: "carousel",
            templateUrl: "./app/carousel/carousel.component.html",
            directives: [carousel_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map