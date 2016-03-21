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
    var PickADateAttribute;
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
            PickADateAttribute = (function () {
                function PickADateAttribute(element) {
                    this.element = element;
                    this.options = {};
                }
                PickADateAttribute.prototype.attached = function () {
                    this.element.classList.add("datepicker");
                    $(this.element).pickadate(this.options);
                    this.picker = $(this.element).pickadate("picker");
                    this.element.addEventListener("focus", this.openFunction.bind(this));
                    $(this.picker).on({ "set": this.onSet.bind(this) });
                };
                PickADateAttribute.prototype.detached = function () {
                    this.element.classList.remove("datepicker");
                    this.element.removeEventListener("focus", this.openFunction);
                    if (this.picker) {
                        $(this.picker).stop();
                    }
                };
                PickADateAttribute.prototype.onSet = function (value) {
                    this.fireEvent(this.element, "input");
                };
                PickADateAttribute.prototype.valueChanged = function (newValue) {
                    this.picker.set("select", newValue);
                };
                PickADateAttribute.prototype.openFunction = function () {
                    this.picker.open();
                };
                PickADateAttribute.prototype.createEvent = function (name) {
                    var event = document.createEvent("Event");
                    event.initEvent(name, true, true);
                    return event;
                };
                PickADateAttribute.prototype.fireEvent = function (element, name) {
                    element.dispatchEvent(this.createEvent(name));
                };
                __decorate([
                    aurelia_framework_1.bindable(), 
                    __metadata('design:type', Object)
                ], PickADateAttribute.prototype, "options", void 0);
                PickADateAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.pickadate),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], PickADateAttribute);
                return PickADateAttribute;
            }());
            exports_1("PickADateAttribute", PickADateAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvcGlja2FkYXRlQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUksNEJBQW9CLE9BQWdCO29CQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO29CQUk3QixZQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUhwQixDQUFDO2dCQU9NLHFDQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFFTSxxQ0FBUSxHQUFmO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMxQixDQUFDO2dCQUNMLENBQUM7Z0JBRU0sa0NBQUssR0FBWixVQUFhLEtBQUs7b0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVNLHlDQUFZLEdBQW5CLFVBQW9CLFFBQVE7b0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFTyx5Q0FBWSxHQUFwQjtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVPLHdDQUFXLEdBQW5CLFVBQW9CLElBQUk7b0JBQ3BCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFFTyxzQ0FBUyxHQUFqQixVQUFrQixPQUFPLEVBQUUsSUFBSTtvQkFDM0IsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBekNEO29CQUFDLDRCQUFRLEVBQUU7O21FQUFBO2dCQVBmO29CQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDakMscUNBQU0sQ0FBQyxPQUFPLENBQUM7O3NDQUFBO2dCQWdEaEIseUJBQUM7WUFBRCxDQS9DQSxBQStDQyxJQUFBO1lBL0NELG1EQStDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9ybXMvcGlja2FkYXRlQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUF0dHJpYnV0ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLnBpY2thZGF0ZSlcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgUGlja0FEYXRlQXR0cmlidXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIHBpY2tlcjtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXRlcGlja2VyXCIpO1xyXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5waWNrYWRhdGUodGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLnBpY2tlciA9ICQodGhpcy5lbGVtZW50KS5waWNrYWRhdGUoXCJwaWNrZXJcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLm9wZW5GdW5jdGlvbi5iaW5kKHRoaXMpKTtcclxuICAgICAgICAkKHRoaXMucGlja2VyKS5vbih7IFwic2V0XCIgOiB0aGlzLm9uU2V0LmJpbmQodGhpcykgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGF0ZXBpY2tlclwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMub3BlbkZ1bmN0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy5waWNrZXIpIHtcclxuICAgICAgICAgICAgJCh0aGlzLnBpY2tlcikuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TZXQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCh0aGlzLmVsZW1lbnQsIFwiaW5wdXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMucGlja2VyLnNldChcInNlbGVjdFwiLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5waWNrZXIub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRXZlbnQobmFtZSkge1xyXG4gICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiBldmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpcmVFdmVudChlbGVtZW50LCBuYW1lKSB7XHJcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KHRoaXMuY3JlYXRlRXZlbnQobmFtZSkpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
