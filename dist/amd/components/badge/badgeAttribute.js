var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "./../../config"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, config_1) {
    "use strict";
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNQTtRQUVJLHdCQUFvQixPQUFlO1lBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUVuQyxDQUFDO1FBS00saUNBQVEsR0FBZjtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUM7UUFFTSxpQ0FBUSxHQUFmO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFTSxtQ0FBVSxHQUFqQjtZQUNJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUYsQ0FBQztRQWhCRDtZQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzttREFBQTtRQVJ2RTtZQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQztZQUM3QixxQ0FBTSxDQUFDLE9BQU8sQ0FBQzs7MEJBQUE7UUF5QmhCLHFCQUFDO0lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtJQXhCWSxzQkFBYyxpQkF3QjFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWRnZS9iYWRnZUF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcuYmFkZ2UpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEJhZGdlQXR0cmlidXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lV2F5LCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgbmV3OiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhZGdlXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLm5ldykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ld1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmFkZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0NoYW5nZWQoKSB7XHJcbiAgICAgICAgKHRoaXMubmV3KSA/IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmV3XCIpIDogdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuZXdcIik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
