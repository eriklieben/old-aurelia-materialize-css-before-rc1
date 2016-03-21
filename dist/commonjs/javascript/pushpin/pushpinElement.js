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
var config_1 = require("./../../config");
var PushpinElement = (function () {
    function PushpinElement(element) {
        this.element = element;
        this.bottom = Infinity;
        this.offset = 0;
        this.top = 0;
    }
    PushpinElement.prototype.attached = function () {
        var options = {
            bottom: this.bottom,
            offset: this.offset,
            top: this.top,
        };
        $(this.element).pushpin(options);
    };
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], PushpinElement.prototype, "bottom", void 0);
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], PushpinElement.prototype, "offset", void 0);
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], PushpinElement.prototype, "top", void 0);
    PushpinElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.pushpin),
        aurelia_framework_1.inlineView("<template><content></content></template>"),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], PushpinElement);
    return PushpinElement;
}());
exports.PushpinElement = PushpinElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQW9ELG1CQUFtQixDQUFDLENBQUE7QUFDeEUsNkNBQXVCLDhCQUE4QixDQUFDLENBQUE7QUFDdEQsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFLeEM7SUFXSSx3QkFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVI3QixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBR2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFHWCxRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBR2YsQ0FBQztJQUVNLGlDQUFRLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRztZQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1NBQ2hCLENBQUM7UUFFRixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBcEJEO1FBQUMsNEJBQVEsRUFBRTs7a0RBQUE7SUFHWDtRQUFDLDRCQUFRLEVBQUU7O2tEQUFBO0lBR1g7UUFBQyw0QkFBUSxFQUFFOzsrQ0FBQTtJQVhmO1FBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDO1FBQzdCLDhCQUFVLENBQUMsMENBQTBDLENBQUM7UUFDdEQscUNBQU0sQ0FBQyxPQUFPLENBQUM7O3NCQUFBO0lBd0JoQixxQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2Qlksc0JBQWMsaUJBdUIxQixDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLnB1c2hwaW4pXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxjb250ZW50PjwvY29udGVudD48L3RlbXBsYXRlPlwiKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBQdXNocGluRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBib3R0b20gPSBJbmZpbml0eTtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIG9mZnNldCA9IDA7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyB0b3AgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcclxuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcclxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHRoaXMuZWxlbWVudCkucHVzaHBpbihvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
