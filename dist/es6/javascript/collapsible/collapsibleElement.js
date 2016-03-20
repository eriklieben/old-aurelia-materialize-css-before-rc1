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
import { config } from "./../../config";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUI7T0FDbkUsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUI7T0FDdEMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0I7QUFJdkM7SUFhVyxRQUFRO1FBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0FBQ0wsQ0FBQztBQVpHO0lBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7OENBQUE7QUFHL0M7SUFBQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUM7O2dEQUFBO0FBRzFFO0lBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDOztpREFBQTtBQVpyRTtJQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ2pDLGFBQWE7O3NCQUFBO0FBaUJiIiwiZmlsZSI6ImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgYmluZGluZ01vZGUgfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmNvbGxhcHNpYmxlKVxyXG5AY29udGFpbmVybGVzc1xyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVFbGVtZW50IHtcclxuXHJcbiAgICBwdWJsaWMgY29sbGFwc2libGU7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUgfSlcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IFwiYWNjb3JkaW9uXCIgfSlcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJcIiB9KVxyXG4gICAgcHVibGljIGNsYXNzOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgICQodGhpcy5jb2xsYXBzaWJsZSkuY29sbGFwc2libGUoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
