System.register(["aurelia-framework", "aurelia-dependency-injection", "../../config"], function(exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_dependency_injection_1, config_1;
    var CollapsibleHeaderAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CollapsibleHeaderAttribute = (function () {
                function CollapsibleHeaderAttribute(element) {
                    this.element = element;
                }
                CollapsibleHeaderAttribute.prototype.attached = function () {
                    this.element.classList.add("collapsible-header");
                };
                CollapsibleHeaderAttribute.prototype.deattached = function () {
                    this.element.classList.remove("collapsible-header");
                };
                CollapsibleHeaderAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.collapsibleHeader),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], CollapsibleHeaderAttribute);
                return CollapsibleHeaderAttribute;
            }());
            exports_1("CollapsibleHeaderAttribute", CollapsibleHeaderAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFSSxvQ0FBb0IsT0FBZ0I7b0JBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7Z0JBQ3BDLENBQUM7Z0JBRU0sNkNBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFFTSwrQ0FBVSxHQUFqQjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFiTDtvQkFBQyxtQ0FBZSxDQUFDLGVBQU0sQ0FBQyxpQkFBaUIsQ0FBQztvQkFDekMscUNBQU0sQ0FBQyxPQUFPLENBQUM7OzhDQUFBO2dCQWFoQixpQ0FBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsbUVBWUMsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLmNvbGxhcHNpYmxlSGVhZGVyKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUhlYWRlckF0dHJpYnV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2libGUtaGVhZGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2libGUtaGVhZGVyXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==