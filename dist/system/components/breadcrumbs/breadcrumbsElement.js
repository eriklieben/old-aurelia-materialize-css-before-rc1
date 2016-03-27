System.register(["aurelia-framework", "./../../config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, config_1;
    var BreadcrumbsElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            BreadcrumbsElement = (function () {
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
            exports_1("BreadcrumbsElement", BreadcrumbsElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnNFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBV0EsQ0FBQztnQkFQVSxxQ0FBUSxHQUFmO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFTSxxQ0FBUSxHQUFmO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFiTDtvQkFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUM7b0JBQ2pDLGlDQUFhLEVBQUU7b0JBQ2YsOEJBQVUsQ0FBQyw4RkFBOEYsQ0FBQzs7c0NBQUE7Z0JBWTNHLHlCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCxtREFXQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnNFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5icmVhZGNydW1icylcclxuQGNvbnRhaW5lcmxlc3MoKVxyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48ZGl2IHJlZj0nZWxlbWVudCc+PGRpdiBjbGFzcz0nY29sIHMxMic+PGNvbnRlbnQ+PC9jb250ZW50PjwvZGl2PjwvZGl2PjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0VsZW1lbnQge1xyXG5cclxuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXYtd3JhcHBlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtd3JhcHBlclwiKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
