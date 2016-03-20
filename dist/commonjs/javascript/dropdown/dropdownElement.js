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
var config_1 = require("../../config");
var DropdownElement = (function () {
    function DropdownElement() {
        this.id = null;
    }
    DropdownElement.prototype.attached = function () {
        if (!this.id || this.id.trim().length === 0) {
            throw new Error("id is a required attribute for the element " + config_1.config.dropdown + ".");
        }
        var options = {
            alignment: this.alignment,
            belowOrigin: this.belowOrigin,
            constrain_width: this.constrainWidth,
            gutter: this.gutter,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
        };
        $(this.dropdownBtn).dropdown(options);
    };
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', String)
    ], DropdownElement.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
        __metadata('design:type', String)
    ], DropdownElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: "left" }), 
        __metadata('design:type', String)
    ], DropdownElement.prototype, "alignment", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
        __metadata('design:type', Boolean)
    ], DropdownElement.prototype, "belowOrigin", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: true }), 
        __metadata('design:type', Boolean)
    ], DropdownElement.prototype, "constrainWidth", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 0 }), 
        __metadata('design:type', Number)
    ], DropdownElement.prototype, "gutter", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
        __metadata('design:type', Boolean)
    ], DropdownElement.prototype, "hover", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 300 }), 
        __metadata('design:type', Number)
    ], DropdownElement.prototype, "inDuration", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 225 }), 
        __metadata('design:type', Number)
    ], DropdownElement.prototype, "outDuration", void 0);
    DropdownElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.dropdown),
        aurelia_framework_1.containerless, 
        __metadata('design:paramtypes', [])
    ], DropdownElement);
    return DropdownElement;
}());
exports.DropdownElement = DropdownElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25FbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBb0UsbUJBQW1CLENBQUMsQ0FBQTtBQUN4Rix1QkFBdUIsY0FBYyxDQUFDLENBQUE7QUFJdEM7SUFBQTtRQU1XLE9BQUUsR0FBVyxJQUFJLENBQUM7SUEyQzdCLENBQUM7SUFsQlUsa0NBQVEsR0FBZjtRQUVJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQThDLGVBQU0sQ0FBQyxRQUFRLE1BQUcsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7UUFFRCxJQUFJLE9BQU8sR0FBZ0M7WUFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hDLENBQUM7UUFFRixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBOUNEO1FBQUMsNEJBQVEsRUFBRTs7a0RBQUE7SUFHWDtRQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxDQUFDOzsrQ0FBQTtJQUd0RDtRQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7O3NEQUFBO0lBRzVFO1FBQUMsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7d0RBQUE7SUFHM0U7UUFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDOzsyREFBQTtJQUcxRTtRQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7O21EQUFBO0lBR3ZFO1FBQUMsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7a0RBQUE7SUFHM0U7UUFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDOzt1REFBQTtJQUd6RTtRQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7O3dEQUFBO0lBNUI3RTtRQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM5QixpQ0FBYTs7dUJBQUE7SUFrRGQsc0JBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLHVCQUFlLGtCQWlEM0IsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY29udGFpbmVybGVzcywgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuZHJvcGRvd24pXHJcbkBjb250YWluZXJsZXNzXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkVsZW1lbnQge1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUgfSlcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJsZWZ0XCIgfSlcclxuICAgIHB1YmxpYyBhbGlnbm1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSlcclxuICAgIHB1YmxpYyBiZWxvd09yaWdpbjogYm9vbGVhbjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KVxyXG4gICAgcHVibGljIGNvbnN0cmFpbldpZHRoOiBib29sZWFuO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiAwIH0pXHJcbiAgICBwdWJsaWMgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgaG92ZXI6IGJvb2xlYW47XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IDMwMCB9KVxyXG4gICAgcHVibGljIGluRHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogMjI1IH0pXHJcbiAgICBwdWJsaWMgb3V0RHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZHJvcGRvd25CdG46IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlkIHx8IHRoaXMuaWQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGlkIGlzIGEgcmVxdWlyZWQgYXR0cmlidXRlIGZvciB0aGUgZWxlbWVudCAke2NvbmZpZy5kcm9wZG93bn0uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogTWF0ZXJpYWxpemUuRHJvcERvd25PcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHRoaXMuYWxpZ25tZW50LFxyXG4gICAgICAgICAgICBiZWxvd09yaWdpbjogdGhpcy5iZWxvd09yaWdpbixcclxuICAgICAgICAgICAgY29uc3RyYWluX3dpZHRoOiB0aGlzLmNvbnN0cmFpbldpZHRoLFxyXG4gICAgICAgICAgICBndXR0ZXI6IHRoaXMuZ3V0dGVyLFxyXG4gICAgICAgICAgICBob3ZlcjogdGhpcy5ob3ZlcixcclxuICAgICAgICAgICAgaW5EdXJhdGlvbjogdGhpcy5pbkR1cmF0aW9uLFxyXG4gICAgICAgICAgICBvdXREdXJhdGlvbjogdGhpcy5vdXREdXJhdGlvbixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHRoaXMuZHJvcGRvd25CdG4pLmRyb3Bkb3duKG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
