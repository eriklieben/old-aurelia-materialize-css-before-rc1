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
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var config_1 = require("../../config");
var CollapsibleAttribute = (function () {
    function CollapsibleAttribute(element) {
        this.element = element;
    }
    CollapsibleAttribute.prototype.attached = function () {
        $(this.element).collapsible();
    };
    CollapsibleAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.collapsible),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], CollapsibleAttribute);
    return CollapsibleAttribute;
}());
exports.CollapsibleAttribute = CollapsibleAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGtDQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELDZDQUF1Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RELHVCQUF1QixjQUFjLENBQUMsQ0FBQTtBQUl0QztJQUVJLDhCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ3BDLENBQUM7SUFFTSx1Q0FBUSxHQUFmO1FBQ0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBVEw7UUFBQyxtQ0FBZSxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUM7UUFDbkMscUNBQU0sQ0FBQyxPQUFPLENBQUM7OzRCQUFBO0lBU2hCLDJCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSw0QkFBb0IsdUJBUWhDLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcuY29sbGFwc2libGUpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlQXR0cmlidXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmNvbGxhcHNpYmxlKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
