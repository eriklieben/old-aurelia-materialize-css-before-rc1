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
var DropdownDividerAttribute = (function () {
    function DropdownDividerAttribute(element) {
        this.element = element;
    }
    DropdownDividerAttribute.prototype.attached = function () {
        this.element.classList.add("divider");
    };
    DropdownDividerAttribute.prototype.deattached = function () {
        this.element.classList.remove("divider");
    };
    DropdownDividerAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.dropdownDivider),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], DropdownDividerAttribute);
    return DropdownDividerAttribute;
}());
exports.DropdownDividerAttribute = DropdownDividerAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBZ0MsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRCw2Q0FBdUIsOEJBQThCLENBQUMsQ0FBQTtBQUN0RCx1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUl4QztJQUVJLGtDQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ3BDLENBQUM7SUFFTSwyQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSw2Q0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBYkw7UUFBQyxtQ0FBZSxDQUFDLGVBQU0sQ0FBQyxlQUFlLENBQUM7UUFDdkMscUNBQU0sQ0FBQyxPQUFPLENBQUM7O2dDQUFBO0lBYWhCLCtCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxnQ0FBd0IsMkJBWXBDLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkRpdmlkZXJBdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5kcm9wZG93bkRpdmlkZXIpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duRGl2aWRlckF0dHJpYnV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRpdmlkZXJcIik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
