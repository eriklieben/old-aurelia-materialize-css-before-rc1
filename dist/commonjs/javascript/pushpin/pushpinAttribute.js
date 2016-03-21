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
var PushpinAttribute = (function () {
    function PushpinAttribute(element) {
        this.element = element;
        this.bottom = Infinity;
        this.offset = 0;
        this.top = 0;
    }
    PushpinAttribute.prototype.attached = function () {
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
    ], PushpinAttribute.prototype, "bottom", void 0);
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], PushpinAttribute.prototype, "offset", void 0);
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], PushpinAttribute.prototype, "top", void 0);
    PushpinAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.pushpin),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], PushpinAttribute);
    return PushpinAttribute;
}());
exports.PushpinAttribute = PushpinAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBMEMsbUJBQW1CLENBQUMsQ0FBQTtBQUM5RCw2Q0FBdUIsOEJBQThCLENBQUMsQ0FBQTtBQUN0RCx1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUl4QztJQVdJLDBCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUjdCLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFHbEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUdYLFFBQUcsR0FBRyxDQUFDLENBQUM7SUFHZixDQUFDO0lBRU0sbUNBQVEsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHO1lBQ1YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDaEIsQ0FBQztRQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFuQkQ7UUFBQyw0QkFBUSxFQUFFOztvREFBQTtJQUdYO1FBQUMsNEJBQVEsRUFBRTs7b0RBQUE7SUFHWDtRQUFDLDRCQUFRLEVBQUU7O2lEQUFBO0lBVmY7UUFBQyxtQ0FBZSxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IscUNBQU0sQ0FBQyxPQUFPLENBQUM7O3dCQUFBO0lBdUJoQix1QkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksd0JBQWdCLG1CQXNCNUIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L3B1c2hwaW4vcHVzaHBpbkF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5wdXNocGluKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBQdXNocGluQXR0cmlidXRlIHtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIGJvdHRvbSA9IEluZmluaXR5O1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIHRvcCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxyXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnB1c2hwaW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
