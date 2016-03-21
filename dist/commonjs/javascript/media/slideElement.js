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
var SlideElement = (function () {
    function SlideElement() {
    }
    SlideElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.slide),
        aurelia_framework_1.containerless,
        aurelia_framework_1.inlineView("<template><li><content></content></li></template>"), 
        __metadata('design:paramtypes', [])
    ], SlideElement);
    return SlideElement;
}());
exports.SlideElement = SlideElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbWVkaWEvc2xpZGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBeUQsbUJBQW1CLENBQUMsQ0FBQTtBQUM3RSx1QkFBcUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUt0QztJQUFBO0lBRUEsQ0FBQztJQUxEO1FBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLGlDQUFhO1FBQ2IsOEJBQVUsQ0FBQyxtREFBbUQsQ0FBQzs7b0JBQUE7SUFHaEUsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9tZWRpYS9zbGlkZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBpbmxpbmVWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5zbGlkZSlcclxuQGNvbnRhaW5lcmxlc3NcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGxpPjxjb250ZW50PjwvY29udGVudD48L2xpPjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBTbGlkZUVsZW1lbnQge1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
