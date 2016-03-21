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
    var PushpinAttribute;
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
            PushpinAttribute = (function () {
                function PushpinAttribute(element) {
                    this.element = element;
                    this.bottom = Infinity;
                    this.offset = 0;
                    this.top = 0;
                }
                PushpinAttribute.prototype.attached = function () {
                    var options = {
                        bottom: this.bottom,
                        offset: this.offset,
                        top: this.top,
                    };
                    $(this.element).pushpin(options);
                };
                __decorate([
                    aurelia_framework_1.bindable(), 
                    __metadata('design:type', Object)
                ], PushpinAttribute.prototype, "bottom", void 0);
                __decorate([
                    aurelia_framework_1.bindable(), 
                    __metadata('design:type', Object)
                ], PushpinAttribute.prototype, "offset", void 0);
                __decorate([
                    aurelia_framework_1.bindable(), 
                    __metadata('design:type', Object)
                ], PushpinAttribute.prototype, "top", void 0);
                PushpinAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.pushpin),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], PushpinAttribute);
                return PushpinAttribute;
            }());
            exports_1("PushpinAttribute", PushpinAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBV0ksMEJBQW9CLE9BQWdCO29CQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO29CQVI3QixXQUFNLEdBQUcsUUFBUSxDQUFDO29CQUdsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUdYLFFBQUcsR0FBRyxDQUFDLENBQUM7Z0JBR2YsQ0FBQztnQkFFTSxtQ0FBUSxHQUFmO29CQUNJLElBQUksT0FBTyxHQUFHO3dCQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTt3QkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3dCQUNuQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7cUJBQ2hCLENBQUM7b0JBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBbkJEO29CQUFDLDRCQUFRLEVBQUU7O2dFQUFBO2dCQUdYO29CQUFDLDRCQUFRLEVBQUU7O2dFQUFBO2dCQUdYO29CQUFDLDRCQUFRLEVBQUU7OzZEQUFBO2dCQVZmO29CQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDL0IscUNBQU0sQ0FBQyxPQUFPLENBQUM7O29DQUFBO2dCQXVCaEIsdUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELCtDQXNCQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLnB1c2hwaW4pXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFB1c2hwaW5BdHRyaWJ1dGUge1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgYm90dG9tID0gSW5maW5pdHk7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBvZmZzZXQgPSAwO1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgdG9wID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXHJcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKHRoaXMuZWxlbWVudCkucHVzaHBpbihvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
