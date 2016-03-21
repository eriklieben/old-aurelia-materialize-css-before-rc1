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
var ScrollSpyAttribute = (function () {
    function ScrollSpyAttribute(element) {
        this.element = element;
    }
    ScrollSpyAttribute.prototype.attached = function () {
        $("*[id]", this.element).scrollSpy();
    };
    ScrollSpyAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.scrollSpy),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], ScrollSpyAttribute);
    return ScrollSpyAttribute;
}());
exports.ScrollSpyAttribute = ScrollSpyAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvc2Nyb2xsc3B5L3Njcm9sbHNweUF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFDcEQsNkNBQXVCLDhCQUE4QixDQUFDLENBQUE7QUFDdEQsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFJeEM7SUFFSSw0QkFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUNwQyxDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUNJLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFUTDtRQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxxQ0FBTSxDQUFDLE9BQU8sQ0FBQzs7MEJBQUE7SUFTaEIseUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLDBCQUFrQixxQkFROUIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L3Njcm9sbHNweS9zY3JvbGxzcHlBdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5zY3JvbGxTcHkpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweUF0dHJpYnV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgICQoXCIqW2lkXVwiLCB0aGlzLmVsZW1lbnQpLnNjcm9sbFNweSgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
