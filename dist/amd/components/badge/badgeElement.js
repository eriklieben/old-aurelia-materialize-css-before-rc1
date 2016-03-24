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
    var BadgeElement = (function () {
        function BadgeElement() {
        }
        __decorate([
            aurelia_framework_1.bindable({ bindingMode: aurelia_framework_1.bindingMode.twoWay, defaultValue: false }), 
            __metadata('design:type', String)
        ], BadgeElement.prototype, "new", void 0);
        BadgeElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.badge),
            aurelia_framework_1.inlineView("<template><span class='badge ${new}'><content></content></span></template>"), 
            __metadata('design:paramtypes', [])
        ], BadgeElement);
        return BadgeElement;
    }());
    exports.BadgeElement = BadgeElement;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBS0E7UUFBQTtRQUlBLENBQUM7UUFGRztZQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOztpREFBQTtRQUp2RTtZQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQztZQUMzQiw4QkFBVSxDQUFDLDRFQUE0RSxDQUFDOzt3QkFBQTtRQUt6RixtQkFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksb0JBQVksZUFJeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2JhZGdlL2JhZGdlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tRWxlbWVudCwgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5iYWRnZSlcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PHNwYW4gY2xhc3M9J2JhZGdlICR7bmV3fSc+PGNvbnRlbnQ+PC9jb250ZW50Pjwvc3Bhbj48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgQmFkZ2VFbGVtZW50IHtcclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5LCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgbmV3OiBzdHJpbmc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
