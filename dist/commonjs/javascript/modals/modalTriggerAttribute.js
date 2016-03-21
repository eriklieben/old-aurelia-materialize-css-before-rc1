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
var ModalTrigger = (function () {
    function ModalTrigger(element) {
        this.element = element;
    }
    ModalTrigger.prototype.attached = function () {
        this.element.addEventListener("click", this.click.bind(this));
    };
    ModalTrigger.prototype.detached = function () {
        this.element.removeEventListener("click", this.click);
    };
    ModalTrigger.prototype.valueChanged = function (newValue) {
        this.value = newValue;
    };
    ModalTrigger.prototype.click = function () {
        $("#" + this.value).openModal();
    };
    ModalTrigger = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.modalTrigger),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], ModalTrigger);
    return ModalTrigger;
}());
exports.ModalTrigger = ModalTrigger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbW9kYWxzL21vZGFsVHJpZ2dlckF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFDcEQsNkNBQXVCLDhCQUE4QixDQUFDLENBQUE7QUFDdEQsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFJeEM7SUFFSSxzQkFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUNwQyxDQUFDO0lBSU0sK0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLFFBQVE7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVNLDRCQUFLLEdBQVo7UUFDSSxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQXZCTDtRQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQztRQUNwQyxxQ0FBTSxDQUFDLE9BQU8sQ0FBQzs7b0JBQUE7SUF1QmhCLG1CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxvQkFBWSxlQXNCeEIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L21vZGFscy9tb2RhbFRyaWdnZXJBdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5tb2RhbFRyaWdnZXIpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIE1vZGFsVHJpZ2dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xpY2soKSB7XHJcbiAgICAgICAgJChgIyR7dGhpcy52YWx1ZX1gKS5vcGVuTW9kYWwoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
