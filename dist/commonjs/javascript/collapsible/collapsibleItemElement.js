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
var config_1 = require("../../config");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQXlELG1CQUFtQixDQUFDLENBQUE7QUFDN0UsdUJBQXVCLGNBQWMsQ0FBQyxDQUFBO0FBS3RDO0lBQUE7SUFDQSxDQUFDO0lBSkQ7UUFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxlQUFlLENBQUM7UUFDckMsaUNBQWE7UUFDYiw4QkFBVSxDQUFDLG1EQUFtRCxDQUFDOzs4QkFBQTtJQUVoRSw2QkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksOEJBQXNCLHlCQUNsQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmNvbGxhcHNpYmxlSXRlbSlcclxuQGNvbnRhaW5lcmxlc3NcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGxpPjxjb250ZW50PjwvY29udGVudD48L2xpPjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUl0ZW1FbGVtZW50IHtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
