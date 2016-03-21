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
var SelectAttribute = (function () {
    function SelectAttribute(element) {
        this.element = element;
    }
    SelectAttribute.prototype.attached = function () {
        $(this.element).material_select();
    };
    SelectAttribute.prototype.detached = function () {
        $(this.element).material_select("destroy");
    };
    SelectAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.materialSelect),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], SelectAttribute);
    return SelectAttribute;
}());
exports.SelectAttribute = SelectAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvc2VsZWN0QXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBZ0MsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRCw2Q0FBdUIsOEJBQThCLENBQUMsQ0FBQTtBQUN0RCx1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUl4QztJQUVJLHlCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ3BDLENBQUM7SUFFTSxrQ0FBUSxHQUFmO1FBQ0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUNJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFiTDtRQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLGNBQWMsQ0FBQztRQUN0QyxxQ0FBTSxDQUFDLE9BQU8sQ0FBQzs7dUJBQUE7SUFhaEIsc0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLHVCQUFlLGtCQVkzQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9ybXMvc2VsZWN0QXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcubWF0ZXJpYWxTZWxlY3QpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEF0dHJpYnV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm1hdGVyaWFsX3NlbGVjdChcImRlc3Ryb3lcIik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
