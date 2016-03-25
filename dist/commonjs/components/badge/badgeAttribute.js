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
var BadgeAttribute = (function () {
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
exports.BadgeAttribute = BadgeAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtDQUF1RCxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNFLDZDQUF1Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RELHVCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBSXhDO0lBRUksd0JBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQztJQUtNLGlDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFFTSxpQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxtQ0FBVSxHQUFqQjtRQUNJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQWhCRDtRQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzsrQ0FBQTtJQVJ2RTtRQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQztRQUM3QixxQ0FBTSxDQUFDLE9BQU8sQ0FBQzs7c0JBQUE7SUF5QmhCLHFCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSxzQkFBYyxpQkF3QjFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWRnZS9iYWRnZUF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcuYmFkZ2UpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEJhZGdlQXR0cmlidXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVdheSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIG5ldzogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5uZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZXdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJhZGdlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdDaGFuZ2VkKCkge1xyXG4gICAgICAgICh0aGlzLm5ldykgPyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ld1wiKSA6IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibmV3XCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
