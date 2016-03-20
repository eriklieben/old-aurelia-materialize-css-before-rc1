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
var CollapsibleBodyElement = (function () {
    function CollapsibleBodyElement() {
    }
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], CollapsibleBodyElement.prototype, "class", void 0);
    CollapsibleBodyElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.collapsibleBody),
        aurelia_framework_1.containerless,
        aurelia_framework_1.inlineView("<template><div class='collapsible-body ${class}'><content></content></div></template>"), 
        __metadata('design:paramtypes', [])
    ], CollapsibleBodyElement);
    return CollapsibleBodyElement;
}());
exports.CollapsibleBodyElement = CollapsibleBodyElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5RWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQW1FLG1CQUFtQixDQUFDLENBQUE7QUFDdkYsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFLeEM7SUFBQTtJQUdBLENBQUM7SUFGRztRQUFDLDRCQUFROzt5REFBQTtJQUpiO1FBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3JDLGlDQUFhO1FBQ2IsOEJBQVUsQ0FBQyx1RkFBdUYsQ0FBQzs7OEJBQUE7SUFJcEcsNkJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLDhCQUFzQix5QkFHbEMsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQm9keUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBpbmxpbmVWaWV3LCBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jb2xsYXBzaWJsZUJvZHkpXHJcbkBjb250YWluZXJsZXNzXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxkaXYgY2xhc3M9J2NvbGxhcHNpYmxlLWJvZHkgJHtjbGFzc30nPjxjb250ZW50PjwvY29udGVudD48L2Rpdj48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVCb2R5RWxlbWVudCB7XHJcbiAgICBAYmluZGFibGVcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
