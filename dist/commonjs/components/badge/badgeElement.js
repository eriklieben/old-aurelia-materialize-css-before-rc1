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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBaUUsbUJBQW1CLENBQUMsQ0FBQTtBQUNyRix1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUl4QztJQUFBO0lBSUEsQ0FBQztJQUZHO1FBQUMsNEJBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7OzZDQUFBO0lBSnZFO1FBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLDhCQUFVLENBQUMsNEVBQTRFLENBQUM7O29CQUFBO0lBS3pGLG1CQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxvQkFBWSxlQUl4QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjdXN0b21FbGVtZW50LCBpbmxpbmVWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmJhZGdlKVxyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48c3BhbiBjbGFzcz0nYmFkZ2UgJHtuZXd9Jz48Y29udGVudD48L2NvbnRlbnQ+PC9zcGFuPjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBCYWRnZUVsZW1lbnQge1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXksIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSlcclxuICAgIHB1YmxpYyBuZXc6IHN0cmluZztcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
