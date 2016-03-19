var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "../../config"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, config_1) {
    "use strict";
    var CollapsibleHeaderAttribute = (function () {
        function CollapsibleHeaderAttribute(element) {
            this.element = element;
        }
        CollapsibleHeaderAttribute.prototype.attached = function () {
            this.element.classList.add("collapsible-header");
        };
        CollapsibleHeaderAttribute.prototype.deattached = function () {
            this.element.classList.remove("collapsible-header");
        };
        CollapsibleHeaderAttribute = __decorate([
            aurelia_framework_1.customAttribute(config_1.config.collapsibleHeader),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], CollapsibleHeaderAttribute);
        return CollapsibleHeaderAttribute;
    }());
    exports.CollapsibleHeaderAttribute = CollapsibleHeaderAttribute;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNQTtRQUVJLG9DQUFvQixPQUFnQjtZQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3BDLENBQUM7UUFFTSw2Q0FBUSxHQUFmO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVNLCtDQUFVLEdBQWpCO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEQsQ0FBQztRQWJMO1lBQUMsbUNBQWUsQ0FBQyxlQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDekMscUNBQU0sQ0FBQyxPQUFPLENBQUM7O3NDQUFBO1FBYWhCLGlDQUFDO0lBQUQsQ0FaQSxBQVlDLElBQUE7SUFaWSxrQ0FBMEIsNkJBWXRDLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUhlYWRlckF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5jb2xsYXBzaWJsZUhlYWRlcilcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVIZWFkZXJBdHRyaWJ1dGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNpYmxlLWhlYWRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNpYmxlLWhlYWRlclwiKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
