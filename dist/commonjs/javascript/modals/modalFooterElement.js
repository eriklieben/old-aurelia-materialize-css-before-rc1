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
var ModelFooterElement = (function () {
    function ModelFooterElement() {
    }
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], ModelFooterElement.prototype, "class", void 0);
    ModelFooterElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.modalFooter),
        aurelia_framework_1.containerless,
        aurelia_framework_1.inlineView("<template><div class='modal-footer ${class}'><content></content></div></template>"), 
        __metadata('design:paramtypes', [])
    ], ModelFooterElement);
    return ModelFooterElement;
}());
exports.ModelFooterElement = ModelFooterElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbW9kYWxzL21vZGFsRm9vdGVyRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQW1FLG1CQUFtQixDQUFDLENBQUE7QUFDdkYsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFLeEM7SUFBQTtJQUdBLENBQUM7SUFGRztRQUFDLDRCQUFROztxREFBQTtJQUpiO1FBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsV0FBVyxDQUFDO1FBQ2pDLGlDQUFhO1FBQ2IsOEJBQVUsQ0FBQyxtRkFBbUYsQ0FBQzs7MEJBQUE7SUFJaEcseUJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLDBCQUFrQixxQkFHOUIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L21vZGFscy9tb2RhbEZvb3RlckVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5tb2RhbEZvb3RlcilcclxuQGNvbnRhaW5lcmxlc3NcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyICR7Y2xhc3N9Jz48Y29udGVudD48L2NvbnRlbnQ+PC9kaXY+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIE1vZGVsRm9vdGVyRWxlbWVudCB7XHJcbiAgICBAYmluZGFibGVcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
