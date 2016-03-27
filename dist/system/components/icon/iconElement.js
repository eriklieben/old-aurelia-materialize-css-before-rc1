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
    var IconElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            IconElement = (function () {
                function IconElement() {
                }
                IconElement.prototype.attached = function () {
                    this.element.classList.add("material-icons");
                    this.element.classList.add(this.size);
                    this.element.innerHTML = this.type;
                };
                IconElement.prototype.detached = function () {
                    this.element.classList.remove("material-icons");
                    this.element.classList.remove(this.size);
                    this.element.innerHTML = "";
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultValue: "" }), 
                    __metadata('design:type', String)
                ], IconElement.prototype, "type", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultValue: "small" }), 
                    __metadata('design:type', String)
                ], IconElement.prototype, "size", void 0);
                IconElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.icon),
                    aurelia_framework_1.containerless(),
                    aurelia_framework_1.inlineView("<i ref='element'></i>"), 
                    __metadata('design:paramtypes', [])
                ], IconElement);
                return IconElement;
            }());
            exports_1("IconElement", IconElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWNvbi9pY29uRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQXFCQSxDQUFDO2dCQVhVLDhCQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRU0sOEJBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2dCQWxCRDtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDOzt5REFBQTtnQkFHL0I7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7eURBQUE7Z0JBUnhDO29CQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLElBQUksQ0FBQztvQkFDMUIsaUNBQWEsRUFBRTtvQkFDZiw4QkFBVSxDQUFDLHVCQUF1QixDQUFDOzsrQkFBQTtnQkFzQnBDLGtCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCxxQ0FxQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2ljb24vaWNvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY29udGFpbmVybGVzcywgY3VzdG9tRWxlbWVudCwgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5pY29uKVxyXG5AY29udGFpbmVybGVzcygpXHJcbkBpbmxpbmVWaWV3KFwiPGkgcmVmPSdlbGVtZW50Jz48L2k+XCIpXHJcbmV4cG9ydCBjbGFzcyBJY29uRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRWYWx1ZTogXCJzbWFsbFwiIH0pXHJcbiAgICBwdWJsaWMgc2l6ZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWF0ZXJpYWwtaWNvbnNcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zaXplKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
