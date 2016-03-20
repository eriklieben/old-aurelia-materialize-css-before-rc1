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
var aurelia_binding_1 = require("aurelia-binding");
var config_1 = require("./../../config");
var CollapsibleElement = (function () {
    function CollapsibleElement() {
    }
    CollapsibleElement.prototype.attached = function () {
        $(this.collapsible).collapsible();
    };
    __decorate([
        aurelia_framework_1.bindable({ bindingMode: aurelia_binding_1.bindingMode.oneTime }), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ bindingMode: aurelia_binding_1.bindingMode.oneTime, defaultValue: "accordion" }), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ bindingMode: aurelia_binding_1.bindingMode.oneTime, defaultValue: "" }), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "class", void 0);
    CollapsibleElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.collapsible),
        aurelia_framework_1.containerless, 
        __metadata('design:paramtypes', [])
    ], CollapsibleElement);
    return CollapsibleElement;
}());
exports.CollapsibleElement = CollapsibleElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBdUQsbUJBQW1CLENBQUMsQ0FBQTtBQUMzRSxnQ0FBNEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM5Qyx1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUl4QztJQUFBO0lBZ0JBLENBQUM7SUFIVSxxQ0FBUSxHQUFmO1FBQ0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBWEQ7UUFBQyw0QkFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLDZCQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7O2tEQUFBO0lBRy9DO1FBQUMsNEJBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSw2QkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUM7O29EQUFBO0lBRzFFO1FBQUMsNEJBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSw2QkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUM7O3FEQUFBO0lBWnJFO1FBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsV0FBVyxDQUFDO1FBQ2pDLGlDQUFhOzswQkFBQTtJQWlCZCx5QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksMEJBQWtCLHFCQWdCOUIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGJpbmRpbmdNb2RlIH0gZnJvbSBcImF1cmVsaWEtYmluZGluZ1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jb2xsYXBzaWJsZSlcclxuQGNvbnRhaW5lcmxlc3NcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlRWxlbWVudCB7XHJcblxyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lIH0pXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBcImFjY29yZGlvblwiIH0pXHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICAkKHRoaXMuY29sbGFwc2libGUpLmNvbGxhcHNpYmxlKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
