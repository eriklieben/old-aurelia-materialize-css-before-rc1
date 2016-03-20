var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, containerless, customElement } from "aurelia-framework";
import { config } from "../../config";
export let DropdownElement = class DropdownElement {
    constructor() {
        this.id = null;
    }
    attached() {
        if (!this.id || this.id.trim().length === 0) {
            throw new Error(`id is a required attribute for the element ${config.dropdown}.`);
        }
        let options = {
            alignment: this.alignment,
            belowOrigin: this.belowOrigin,
            constrain_width: this.constrainWidth,
            gutter: this.gutter,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
        };
        $(this.dropdownBtn).dropdown(options);
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', String)
], DropdownElement.prototype, "title", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }), 
    __metadata('design:type', String)
], DropdownElement.prototype, "id", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: "left" }), 
    __metadata('design:type', String)
], DropdownElement.prototype, "alignment", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false }), 
    __metadata('design:type', Boolean)
], DropdownElement.prototype, "belowOrigin", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: true }), 
    __metadata('design:type', Boolean)
], DropdownElement.prototype, "constrainWidth", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 0 }), 
    __metadata('design:type', Number)
], DropdownElement.prototype, "gutter", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false }), 
    __metadata('design:type', Boolean)
], DropdownElement.prototype, "hover", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 300 }), 
    __metadata('design:type', Number)
], DropdownElement.prototype, "inDuration", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 225 }), 
    __metadata('design:type', Number)
], DropdownElement.prototype, "outDuration", void 0);
DropdownElement = __decorate([
    customElement(config.dropdown),
    containerless, 
    __metadata('design:paramtypes', [])
], DropdownElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25FbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CO09BQ2hGLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYztBQUlyQztJQUFBO1FBTVcsT0FBRSxHQUFXLElBQUksQ0FBQztJQTJDN0IsQ0FBQztJQWxCVSxRQUFRO1FBRVgsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUVELElBQUksT0FBTyxHQUFnQztZQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztRQUVGLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7QUFDTCxDQUFDO0FBL0NHO0lBQUMsUUFBUSxFQUFFOzs4Q0FBQTtBQUdYO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDOzsyQ0FBQTtBQUd0RDtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDOztrREFBQTtBQUc1RTtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOztvREFBQTtBQUczRTtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDOzt1REFBQTtBQUcxRTtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDOzsrQ0FBQTtBQUd2RTtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzs4Q0FBQTtBQUczRTtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDOzttREFBQTtBQUd6RTtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDOztvREFBQTtBQTVCN0U7SUFBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM5QixhQUFhOzttQkFBQTtBQWtEYiIsImZpbGUiOiJqYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY29udGFpbmVybGVzcywgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuZHJvcGRvd24pXHJcbkBjb250YWluZXJsZXNzXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkVsZW1lbnQge1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUgfSlcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJsZWZ0XCIgfSlcclxuICAgIHB1YmxpYyBhbGlnbm1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSlcclxuICAgIHB1YmxpYyBiZWxvd09yaWdpbjogYm9vbGVhbjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KVxyXG4gICAgcHVibGljIGNvbnN0cmFpbldpZHRoOiBib29sZWFuO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiAwIH0pXHJcbiAgICBwdWJsaWMgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgaG92ZXI6IGJvb2xlYW47XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IDMwMCB9KVxyXG4gICAgcHVibGljIGluRHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogMjI1IH0pXHJcbiAgICBwdWJsaWMgb3V0RHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZHJvcGRvd25CdG46IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlkIHx8IHRoaXMuaWQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGlkIGlzIGEgcmVxdWlyZWQgYXR0cmlidXRlIGZvciB0aGUgZWxlbWVudCAke2NvbmZpZy5kcm9wZG93bn0uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogTWF0ZXJpYWxpemUuRHJvcERvd25PcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHRoaXMuYWxpZ25tZW50LFxyXG4gICAgICAgICAgICBiZWxvd09yaWdpbjogdGhpcy5iZWxvd09yaWdpbixcclxuICAgICAgICAgICAgY29uc3RyYWluX3dpZHRoOiB0aGlzLmNvbnN0cmFpbldpZHRoLFxyXG4gICAgICAgICAgICBndXR0ZXI6IHRoaXMuZ3V0dGVyLFxyXG4gICAgICAgICAgICBob3ZlcjogdGhpcy5ob3ZlcixcclxuICAgICAgICAgICAgaW5EdXJhdGlvbjogdGhpcy5pbkR1cmF0aW9uLFxyXG4gICAgICAgICAgICBvdXREdXJhdGlvbjogdGhpcy5vdXREdXJhdGlvbixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHRoaXMuZHJvcGRvd25CdG4pLmRyb3Bkb3duKG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
