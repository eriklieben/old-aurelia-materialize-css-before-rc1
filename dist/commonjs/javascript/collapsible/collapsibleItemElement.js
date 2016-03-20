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
var CollapsibleItemElement = (function () {
    function CollapsibleItemElement() {
    }
    CollapsibleItemElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.collapsibleItem),
        aurelia_framework_1.containerless,
        aurelia_framework_1.inlineView("<template><li><content></content></li></template>"), 
        __metadata('design:paramtypes', [])
    ], CollapsibleItemElement);
    return CollapsibleItemElement;
}());
exports.CollapsibleItemElement = CollapsibleItemElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQXlELG1CQUFtQixDQUFDLENBQUE7QUFDN0UsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFLeEM7SUFBQTtJQUNBLENBQUM7SUFKRDtRQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLGVBQWUsQ0FBQztRQUNyQyxpQ0FBYTtRQUNiLDhCQUFVLENBQUMsbURBQW1ELENBQUM7OzhCQUFBO0lBRWhFLDZCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSw4QkFBc0IseUJBQ2xDLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUl0ZW1FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jb2xsYXBzaWJsZUl0ZW0pXHJcbkBjb250YWluZXJsZXNzXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxsaT48Y29udGVudD48L2NvbnRlbnQ+PC9saT48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVJdGVtRWxlbWVudCB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
