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
var skills_service_1 = require("../services/skills/skills.service");
var common_1 = require("@angular/common");
var SkillsComponent = (function () {
    function SkillsComponent(skillsService) {
        var _this = this;
        this.skillsService = skillsService;
        this.skills = [];
        this.skillsService.getSkills().subscribe(function (data) {
            _this.skills = data.json();
        });
    }
    SkillsComponent = __decorate([
        core_1.Component({
            selector: "skills",
            templateUrl: "./app/skills/skills.component.html",
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [skills_service_1.SkillsService])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map