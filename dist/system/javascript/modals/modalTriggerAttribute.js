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
    var ModalTrigger;
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
            ModalTrigger = (function () {
                function ModalTrigger(element) {
                    this.element = element;
                }
                ModalTrigger.prototype.attached = function () {
                    this.element.addEventListener("click", this.click.bind(this));
                };
                ModalTrigger.prototype.detached = function () {
                    this.element.removeEventListener("click", this.click);
                };
                ModalTrigger.prototype.valueChanged = function (newValue) {
                    this.value = newValue;
                };
                ModalTrigger.prototype.click = function () {
                    $("#" + this.value).openModal();
                };
                ModalTrigger = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.modalTrigger),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], ModalTrigger);
                return ModalTrigger;
            }());
            exports_1("ModalTrigger", ModalTrigger);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbW9kYWxzL21vZGFsVHJpZ2dlckF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJLHNCQUFvQixPQUFnQjtvQkFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztnQkFDcEMsQ0FBQztnQkFJTSwrQkFBUSxHQUFmO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRU0sK0JBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBRU0sbUNBQVksR0FBbkIsVUFBb0IsUUFBUTtvQkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQzFCLENBQUM7Z0JBRU0sNEJBQUssR0FBWjtvQkFDSSxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3BDLENBQUM7Z0JBdkJMO29CQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQztvQkFDcEMscUNBQU0sQ0FBQyxPQUFPLENBQUM7O2dDQUFBO2dCQXVCaEIsbUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELHVDQXNCQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvbW9kYWxzL21vZGFsVHJpZ2dlckF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLm1vZGFsVHJpZ2dlcilcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxUcmlnZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWU7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGljaygpIHtcclxuICAgICAgICAkKGAjJHt0aGlzLnZhbHVlfWApLm9wZW5Nb2RhbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
