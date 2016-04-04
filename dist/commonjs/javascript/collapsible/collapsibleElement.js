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
var config_1 = require("./../../config");
var CollapsibleElement = (function () {
    function CollapsibleElement() {
    }
    CollapsibleElement.prototype.attached = function () {
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
    CollapsibleElement.prototype.detached = function () {
        this.element.removeAttribute("data-collapsible");
        for (var i = 0; i < this.element.classList.length; i++) {
            this.element.classList.remove(this.element.classList[i]);
        }
    };
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultValue: "accordion" }), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultValue: "" }), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "class", void 0);
    CollapsibleElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.collapsible),
        aurelia_framework_1.containerless,
        aurelia_framework_1.inlineView("<template><ul ref='element' id='${id}'><content></content></ul></template>"), 
        __metadata('design:paramtypes', [])
    ], CollapsibleElement);
    return CollapsibleElement;
}());
exports.CollapsibleElement = CollapsibleElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBbUUsbUJBQW1CLENBQUMsQ0FBQTtBQUN2Rix1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUt4QztJQUFBO0lBcUNBLENBQUM7SUF4QlUscUNBQVEsR0FBZjtRQUFBLGlCQWNDO1FBWkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDakMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBR2pELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztJQUNMLENBQUM7SUFoQ0Q7UUFBQyw0QkFBUSxFQUFFOztrREFBQTtJQUdYO1FBQUMsNEJBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsQ0FBQzs7b0RBQUE7SUFHeEM7UUFBQyw0QkFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDOztxREFBQTtJQWJuQztRQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxpQ0FBYTtRQUNiLDhCQUFVLENBQUMsNEVBQTRFLENBQUM7OzBCQUFBO0lBc0N6Rix5QkFBQztBQUFELENBckNBLEFBcUNDLElBQUE7QUFyQ1ksMEJBQWtCLHFCQXFDOUIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBpbmxpbmVWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmNvbGxhcHNpYmxlKVxyXG5AY29udGFpbmVybGVzc1xyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48dWwgcmVmPSdlbGVtZW50JyBpZD0nJHtpZH0nPjxjb250ZW50PjwvY29udGVudD48L3VsPjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUVsZW1lbnQge1xyXG5cclxuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MVUxpc3RFbGVtZW50O1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0VmFsdWU6IFwiYWNjb3JkaW9uXCIgfSlcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2libGVcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sbGFwc2libGVcIiwgdGhpcy50eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhc3MgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmNsYXNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHRoaXMuZWxlbWVudCkuY29sbGFwc2libGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY29sbGFwc2libGVcIik7XHJcblxyXG4gICAgICAgIC8vIFRoZXJlIHNob3VsZCBub3QgYmUgYW55IGNzcyBjbGFzcyBvbiB0aGUgdWwuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lbGVtZW50LmNsYXNzTGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
