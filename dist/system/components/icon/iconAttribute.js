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
    var IconAttribute;
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
            IconAttribute = (function () {
                function IconAttribute(element) {
                    this.element = element;
                }
                IconAttribute.prototype.attached = function () {
                    this.element.classList.add("material-icons");
                    this.element.classList.add(this.size);
                    this.element.innerHTML = this.type;
                };
                IconAttribute.prototype.detached = function () {
                    this.element.classList.remove("material-icons");
                    this.element.classList.remove(this.size);
                    this.element.innerHTML = "";
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultValue: "" }), 
                    __metadata('design:type', String)
                ], IconAttribute.prototype, "type", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultValue: "small" }), 
                    __metadata('design:type', String)
                ], IconAttribute.prototype, "size", void 0);
                IconAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.icon),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], IconAttribute);
                return IconAttribute;
            }());
            exports_1("IconAttribute", IconAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWNvbi9pY29uQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUksdUJBQW9CLE9BQWdCO29CQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO2dCQUVwQyxDQUFDO2dCQVFNLGdDQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRU0sZ0NBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2dCQWhCRDtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDOzsyREFBQTtnQkFHL0I7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7MkRBQUE7Z0JBWHhDO29CQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLElBQUksQ0FBQztvQkFDNUIscUNBQU0sQ0FBQyxPQUFPLENBQUM7O2lDQUFBO2dCQXdCaEIsb0JBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELHlDQXVCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaWNvbi9pY29uQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUF0dHJpYnV0ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLmljb24pXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEljb25BdHRyaWJ1dGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0VmFsdWU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcInNtYWxsXCIgfSlcclxuICAgIHB1YmxpYyBzaXplOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zaXplKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
