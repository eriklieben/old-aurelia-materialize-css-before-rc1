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
var CollapsibleHeaderElement = (function () {
    function CollapsibleHeaderElement() {
    }
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], CollapsibleHeaderElement.prototype, "class", void 0);
    CollapsibleHeaderElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.collapsibleHeader),
        aurelia_framework_1.containerless,
        aurelia_framework_1.inlineView("<template><div class='collapsible-header ${class}'><content></content></div></template>"), 
        __metadata('design:paramtypes', [])
    ], CollapsibleHeaderElement);
    return CollapsibleHeaderElement;
}());
exports.CollapsibleHeaderElement = CollapsibleHeaderElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBbUUsbUJBQW1CLENBQUMsQ0FBQTtBQUN2Rix1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUt4QztJQUFBO0lBR0EsQ0FBQztJQUZHO1FBQUMsNEJBQVE7OzJEQUFBO0lBSmI7UUFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUN2QyxpQ0FBYTtRQUNiLDhCQUFVLENBQUMseUZBQXlGLENBQUM7O2dDQUFBO0lBSXRHLCtCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxnQ0FBd0IsMkJBR3BDLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUhlYWRlckVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBpbmxpbmVWaWV3LCBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jb2xsYXBzaWJsZUhlYWRlcilcclxuQGNvbnRhaW5lcmxlc3NcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGRpdiBjbGFzcz0nY29sbGFwc2libGUtaGVhZGVyICR7Y2xhc3N9Jz48Y29udGVudD48L2NvbnRlbnQ+PC9kaXY+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlSGVhZGVyRWxlbWVudCB7XHJcbiAgICBAYmluZGFibGVcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
