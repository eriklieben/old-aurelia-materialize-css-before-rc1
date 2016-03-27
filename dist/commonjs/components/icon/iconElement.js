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
var config_1 = require("./../../config");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWNvbi9pY29uRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQW1FLG1CQUFtQixDQUFDLENBQUE7QUFDdkYsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFLeEM7SUFBQTtJQXFCQSxDQUFDO0lBWFUsOEJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRU0sOEJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFsQkQ7UUFBQyw0QkFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDOzs2Q0FBQTtJQUcvQjtRQUFDLDRCQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7OzZDQUFBO0lBUnhDO1FBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFCLGlDQUFhLEVBQUU7UUFDZiw4QkFBVSxDQUFDLHVCQUF1QixDQUFDOzttQkFBQTtJQXNCcEMsa0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLG1CQUFXLGNBcUJ2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaWNvbi9pY29uRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjb250YWluZXJsZXNzLCBjdXN0b21FbGVtZW50LCBpbmxpbmVWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmljb24pXHJcbkBjb250YWluZXJsZXNzKClcclxuQGlubGluZVZpZXcoXCI8aSByZWY9J2VsZW1lbnQnPjwvaT5cIilcclxuZXhwb3J0IGNsYXNzIEljb25FbGVtZW50IHtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0VmFsdWU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcInNtYWxsXCIgfSlcclxuICAgIHB1YmxpYyBzaXplOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
