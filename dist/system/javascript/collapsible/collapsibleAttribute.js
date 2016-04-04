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
    var CollapsibleAttribute;
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
            CollapsibleAttribute = (function () {
                function CollapsibleAttribute(element) {
                    this.element = element;
                }
                CollapsibleAttribute.prototype.attached = function () {
                    var _this = this;
                    this.element.classList.add("collapsible");
                    this.element.setAttribute("data-collapsible", this.type);
                    if (this.class !== undefined && this.class !== null) {
                        this.class.split(" ").forEach(function (element) {
                            if (element !== '') {
                                _this.element.classList.add(element);
                            }
                        });
                    }
                    $(this.element).collapsible();
                };
                CollapsibleAttribute.prototype.detached = function () {
                    this.element.removeAttribute("data-collapsible");
                    for (var i = 0; i < this.element.classList.length; i++) {
                        this.element.classList.remove(this.element.classList[i]);
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultValue: "accordion" }), 
                    __metadata('design:type', String)
                ], CollapsibleAttribute.prototype, "type", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultValue: "" }), 
                    __metadata('design:type', String)
                ], CollapsibleAttribute.prototype, "class", void 0);
                CollapsibleAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.collapsible),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [HTMLUListElement])
                ], CollapsibleAttribute);
                return CollapsibleAttribute;
            }());
            exports_1("CollapsibleAttribute", CollapsibleAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFRSSw4QkFBb0IsT0FBeUI7b0JBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO2dCQUM3QyxDQUFDO2dCQUVNLHVDQUFRLEdBQWY7b0JBQUEsaUJBY0M7b0JBWkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXpELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzs0QkFDakMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDeEMsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDO29CQUVELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRU0sdUNBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUdqRCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsQ0FBQztnQkFDTCxDQUFDO2dCQWhDRDtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDOztrRUFBQTtnQkFHeEM7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQzs7bUVBQUE7Z0JBUG5DO29CQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDbkMscUNBQU0sQ0FBQyxPQUFPLENBQUM7O3dDQUFBO2dCQW9DaEIsMkJBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELHVEQW1DQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUF0dHJpYnV0ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLmNvbGxhcHNpYmxlKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUF0dHJpYnV0ZSB7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcImFjY29yZGlvblwiIH0pXHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRWYWx1ZTogXCJcIiB9KVxyXG4gICAgcHVibGljIGNsYXNzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBIVE1MVUxpc3RFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNpYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbGxhcHNpYmxlXCIsIHRoaXMudHlwZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYXNzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5jbGFzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmNvbGxhcHNpYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWNvbGxhcHNpYmxlXCIpO1xyXG5cclxuICAgICAgICAvLyBUaGVyZSBzaG91bGQgbm90IGJlIGFueSBjc3MgY2xhc3Mgb24gdGhlIHVsLlxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
