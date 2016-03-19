var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, containerless, bindable } from "aurelia-framework";
import { bindingMode } from "aurelia-binding";
import { config } from "../../config";
export let CollapsibleElement = class CollapsibleElement {
    attached() {
        $(this.collapsible).collapsible();
    }
};
__decorate([
    bindable({ bindingMode: bindingMode.oneTime }), 
    __metadata('design:type', String)
], CollapsibleElement.prototype, "id", void 0);
__decorate([
    bindable({ bindingMode: bindingMode.oneTime, defaultValue: "accordion" }), 
    __metadata('design:type', String)
], CollapsibleElement.prototype, "type", void 0);
__decorate([
    bindable({ bindingMode: bindingMode.oneTime, defaultValue: "" }), 
    __metadata('design:type', String)
], CollapsibleElement.prototype, "class", void 0);
CollapsibleElement = __decorate([
    customElement(config.collapsible),
    containerless, 
    __metadata('design:paramtypes', [])
], CollapsibleElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUI7T0FDbkUsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUI7T0FDdEMsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjO0FBSXJDO0lBYVcsUUFBUTtRQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQztBQUNMLENBQUM7QUFaRztJQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7OzhDQUFBO0FBRy9DO0lBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDOztnREFBQTtBQUcxRTtJQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQzs7aURBQUE7QUFackU7SUFBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNqQyxhQUFhOztzQkFBQTtBQWlCYiIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGJpbmRpbmdNb2RlIH0gZnJvbSBcImF1cmVsaWEtYmluZGluZ1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuY29sbGFwc2libGUpXHJcbkBjb250YWluZXJsZXNzXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUVsZW1lbnQge1xyXG5cclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZTtcclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSB9KVxyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJhY2NvcmRpb25cIiB9KVxyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgJCh0aGlzLmNvbGxhcHNpYmxlKS5jb2xsYXBzaWJsZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
