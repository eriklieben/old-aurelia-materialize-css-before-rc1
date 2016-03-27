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
var BreadcrumbsElement = (function () {
    function BreadcrumbsElement() {
    }
    BreadcrumbsElement.prototype.attached = function () {
        this.element.classList.add("nav-wrapper");
    };
    BreadcrumbsElement.prototype.detached = function () {
        this.element.classList.remove("nav-wrapper");
    };
    BreadcrumbsElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.breadcrumbs),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.inlineView("<template><div ref='element'><div class='col s12'><content></content></div></div></template>"), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbsElement);
    return BreadcrumbsElement;
}());
exports.BreadcrumbsElement = BreadcrumbsElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnNFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBeUQsbUJBQW1CLENBQUMsQ0FBQTtBQUM3RSx1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUt4QztJQUFBO0lBV0EsQ0FBQztJQVBVLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQWJMO1FBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsV0FBVyxDQUFDO1FBQ2pDLGlDQUFhLEVBQUU7UUFDZiw4QkFBVSxDQUFDLDhGQUE4RixDQUFDOzswQkFBQTtJQVkzRyx5QkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksMEJBQWtCLHFCQVc5QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnNFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5icmVhZGNydW1icylcclxuQGNvbnRhaW5lcmxlc3MoKVxyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48ZGl2IHJlZj0nZWxlbWVudCc+PGRpdiBjbGFzcz0nY29sIHMxMic+PGNvbnRlbnQ+PC9jb250ZW50PjwvZGl2PjwvZGl2PjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0VsZW1lbnQge1xyXG5cclxuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXYtd3JhcHBlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtd3JhcHBlclwiKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
