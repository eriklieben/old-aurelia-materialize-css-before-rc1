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
var aurelia_pal_1 = require("aurelia-pal");
var config_1 = require("./../../config");
var BreadcrumbsAttribute = (function () {
    function BreadcrumbsAttribute(element) {
        this.element = element;
    }
    BreadcrumbsAttribute.prototype.attached = function () {
        var colWrapper = aurelia_pal_1.DOM.createElement("div");
        colWrapper.classList.add("col", "s12");
        while (this.element.hasChildNodes()) {
            colWrapper.appendChild(this.element.firstChild);
        }
        this.element.appendChild(colWrapper);
        this.element.classList.add("nav-wrapper");
    };
    BreadcrumbsAttribute.prototype.detached = function () {
        this.element.classList.remove("nav-wrapper");
    };
    BreadcrumbsAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.breadcrumbs),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [HTMLElement])
    ], BreadcrumbsAttribute);
    return BreadcrumbsAttribute;
}());
exports.BreadcrumbsAttribute = BreadcrumbsAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnNBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtDQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELDZDQUF1Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RELDRCQUFvQixhQUFhLENBQUMsQ0FBQTtBQUNsQyx1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUl4QztJQUVJLDhCQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUksQ0FBQztJQUVyQyx1Q0FBUSxHQUFmO1FBRUksSUFBSSxVQUFVLEdBQUcsaUJBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSx1Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFyQkw7UUFBQyxtQ0FBZSxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUM7UUFDbkMscUNBQU0sQ0FBQyxPQUFPLENBQUM7OzRCQUFBO0lBcUJoQiwyQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksNEJBQW9CLHVCQW9CaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IERPTSB9IGZyb20gXCJhdXJlbGlhLXBhbFwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLmJyZWFkY3J1bWJzKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0F0dHJpYnV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7IH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcblxyXG4gICAgICAgIGxldCBjb2xXcmFwcGVyID0gRE9NLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiczEyXCIpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5lbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBjb2xXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb2xXcmFwcGVyKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi13cmFwcGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi13cmFwcGVyXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
