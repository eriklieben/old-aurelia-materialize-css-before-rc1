"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var config_1 = require("./../../config");
var PickADateAttribute = (function () {
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
exports.PickADateAttribute = PickADateAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvcGlja2FkYXRlQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBMEMsbUJBQW1CLENBQUMsQ0FBQTtBQUM5RCw2Q0FBdUIsOEJBQThCLENBQUMsQ0FBQTtBQUN0RCx1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUl4QztJQUVJLDRCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBSTdCLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFIcEIsQ0FBQztJQU9NLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQUVNLGtDQUFLLEdBQVosVUFBYSxLQUFLO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSx5Q0FBWSxHQUFuQixVQUFvQixRQUFRO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8seUNBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyx3Q0FBVyxHQUFuQixVQUFvQixJQUFJO1FBQ3BCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVPLHNDQUFTLEdBQWpCLFVBQWtCLE9BQU8sRUFBRSxJQUFJO1FBQzNCLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF6Q0Q7UUFBQyw0QkFBUSxFQUFFOzt1REFBQTtJQVBmO1FBQUMsbUNBQWUsQ0FBQyxlQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLHFDQUFNLENBQUMsT0FBTyxDQUFDOzswQkFBQTtJQWdEaEIseUJBQUM7QUFBRCxDQS9DQSxBQStDQyxJQUFBO0FBL0NZLDBCQUFrQixxQkErQzlCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy9waWNrYWRhdGVBdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcucGlja2FkYXRlKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBQaWNrQURhdGVBdHRyaWJ1dGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgcGlja2VyO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhdGVwaWNrZXJcIik7XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnBpY2thZGF0ZSh0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucGlja2VyID0gJCh0aGlzLmVsZW1lbnQpLnBpY2thZGF0ZShcInBpY2tlclwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMub3BlbkZ1bmN0aW9uLmJpbmQodGhpcykpO1xyXG4gICAgICAgICQodGhpcy5waWNrZXIpLm9uKHsgXCJzZXRcIiA6IHRoaXMub25TZXQuYmluZCh0aGlzKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXRlcGlja2VyXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5vcGVuRnVuY3Rpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLnBpY2tlcikge1xyXG4gICAgICAgICAgICAkKHRoaXMucGlja2VyKS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNldCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KHRoaXMuZWxlbWVudCwgXCJpbnB1dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5waWNrZXIuc2V0KFwic2VsZWN0XCIsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5GdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnBpY2tlci5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVFdmVudChuYW1lKSB7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuICAgICAgICBldmVudC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlyZUV2ZW50KGVsZW1lbnQsIG5hbWUpIHtcclxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5jcmVhdGVFdmVudChuYW1lKSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
