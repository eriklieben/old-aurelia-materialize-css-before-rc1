var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./../../config"], function (require, exports, aurelia_framework_1, config_1) {
    "use strict";
    var IconElement = (function () {
        function IconElement() {
        }
        IconElement.prototype.attached = function () {
            this.element.classList.add("material-icons");
            this.element.classList.add(this.size);
            this.element.innerHTML = this.type;
        };
        IconElement.prototype.detached = function () {
            this.element.classList.remove("material-icons");
            this.element.classList.remove(this.size);
            this.element.innerHTML = "";
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultValue: "" }), 
            __metadata('design:type', String)
        ], IconElement.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultValue: "small" }), 
            __metadata('design:type', String)
        ], IconElement.prototype, "size", void 0);
        IconElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.icon),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inlineView("<i ref='element'></i>"), 
            __metadata('design:paramtypes', [])
        ], IconElement);
        return IconElement;
    }());
    exports.IconElement = IconElement;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWNvbi9pY29uRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBQUE7UUFxQkEsQ0FBQztRQVhVLDhCQUFRLEdBQWY7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkMsQ0FBQztRQUVNLDhCQUFRLEdBQWY7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBbEJEO1lBQUMsNEJBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQzs7aURBQUE7UUFHL0I7WUFBQyw0QkFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDOztpREFBQTtRQVJ4QztZQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLElBQUksQ0FBQztZQUMxQixpQ0FBYSxFQUFFO1lBQ2YsOEJBQVUsQ0FBQyx1QkFBdUIsQ0FBQzs7dUJBQUE7UUFzQnBDLGtCQUFDO0lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtJQXJCWSxtQkFBVyxjQXFCdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2ljb24vaWNvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY29udGFpbmVybGVzcywgY3VzdG9tRWxlbWVudCwgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5pY29uKVxyXG5AY29udGFpbmVybGVzcygpXHJcbkBpbmxpbmVWaWV3KFwiPGkgcmVmPSdlbGVtZW50Jz48L2k+XCIpXHJcbmV4cG9ydCBjbGFzcyBJY29uRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRWYWx1ZTogXCJzbWFsbFwiIH0pXHJcbiAgICBwdWJsaWMgc2l6ZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWF0ZXJpYWwtaWNvbnNcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zaXplKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
