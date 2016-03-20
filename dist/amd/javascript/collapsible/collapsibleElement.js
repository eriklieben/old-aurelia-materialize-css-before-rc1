var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-binding", "./../../config"], function (require, exports, aurelia_framework_1, aurelia_binding_1, config_1) {
    "use strict";
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTUE7UUFBQTtRQWdCQSxDQUFDO1FBSFUscUNBQVEsR0FBZjtZQUNJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQVhEO1lBQUMsNEJBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSw2QkFBVyxDQUFDLE9BQU8sRUFBRSxDQUFDOztzREFBQTtRQUcvQztZQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsNkJBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDOzt3REFBQTtRQUcxRTtZQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsNkJBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDOzt5REFBQTtRQVpyRTtZQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNqQyxpQ0FBYTs7OEJBQUE7UUFpQmQseUJBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLDBCQUFrQixxQkFnQjlCLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBiaW5kaW5nTW9kZSB9IGZyb20gXCJhdXJlbGlhLWJpbmRpbmdcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuY29sbGFwc2libGUpXHJcbkBjb250YWluZXJsZXNzXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUVsZW1lbnQge1xyXG5cclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZTtcclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSB9KVxyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJhY2NvcmRpb25cIiB9KVxyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgJCh0aGlzLmNvbGxhcHNpYmxlKS5jb2xsYXBzaWJsZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
