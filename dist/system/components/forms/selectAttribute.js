System.register(["aurelia-framework", "aurelia-dependency-injection", "./../../config"], function(exports_1, context_1) {
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
    var SelectAttribute;
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
            SelectAttribute = (function () {
                function SelectAttribute(element) {
                    this.element = element;
                }
                SelectAttribute.prototype.attached = function () {
                    $(this.element).material_select();
                };
                SelectAttribute.prototype.detached = function () {
                    $(this.element).material_select("destroy");
                };
                SelectAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.materialSelect),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], SelectAttribute);
                return SelectAttribute;
            }());
            exports_1("SelectAttribute", SelectAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvc2VsZWN0QXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUkseUJBQW9CLE9BQWdCO29CQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO2dCQUNwQyxDQUFDO2dCQUVNLGtDQUFRLEdBQWY7b0JBQ0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdEMsQ0FBQztnQkFFTSxrQ0FBUSxHQUFmO29CQUNJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQWJMO29CQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLGNBQWMsQ0FBQztvQkFDdEMscUNBQU0sQ0FBQyxPQUFPLENBQUM7O21DQUFBO2dCQWFoQixzQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsNkNBWUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL3NlbGVjdEF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLm1hdGVyaWFsU2VsZWN0KVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RBdHRyaWJ1dGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICAkKHRoaXMuZWxlbWVudCkubWF0ZXJpYWxfc2VsZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5tYXRlcmlhbF9zZWxlY3QoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
