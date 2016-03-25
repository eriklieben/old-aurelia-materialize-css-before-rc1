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
    var BadgeAttribute;
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
            BadgeAttribute = (function () {
                function BadgeAttribute(element) {
                    this.element = element;
                }
                BadgeAttribute.prototype.attached = function () {
                    this.element.classList.add("badge");
                    if (this.new) {
                        this.element.classList.add("new");
                    }
                };
                BadgeAttribute.prototype.detached = function () {
                    this.element.classList.remove("badge");
                };
                BadgeAttribute.prototype.newChanged = function () {
                    (this.new) ? this.element.classList.add("new") : this.element.classList.remove("new");
                };
                __decorate([
                    aurelia_framework_1.bindable({ bindingMode: aurelia_framework_1.bindingMode.oneWay, defaultValue: false }), 
                    __metadata('design:type', Boolean)
                ], BadgeAttribute.prototype, "new", void 0);
                BadgeAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.badge),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], BadgeAttribute);
                return BadgeAttribute;
            }());
            exports_1("BadgeAttribute", BadgeAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFSSx3QkFBb0IsT0FBZ0I7b0JBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7Z0JBRXBDLENBQUM7Z0JBS00saUNBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLGlDQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVNLG1DQUFVLEdBQWpCO29CQUNJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFGLENBQUM7Z0JBaEJEO29CQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzsyREFBQTtnQkFSdkU7b0JBQUMsbUNBQWUsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDO29CQUM3QixxQ0FBTSxDQUFDLE9BQU8sQ0FBQzs7a0NBQUE7Z0JBeUJoQixxQkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsMkNBd0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWRnZS9iYWRnZUF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcuYmFkZ2UpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEJhZGdlQXR0cmlidXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVdheSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIG5ldzogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5uZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZXdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJhZGdlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdDaGFuZ2VkKCkge1xyXG4gICAgICAgICh0aGlzLm5ldykgPyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ld1wiKSA6IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibmV3XCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
