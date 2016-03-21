var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";
export let ModalElement = class ModalElement {
    constructor() {
        this.id = null;
    }
    attached() {
        if (!this.id || this.id.trim().length === 0) {
            throw new Error(`id is a required attribute for the element ${config.modal}, ` +
                `you need to set it on your modal trigger(${config.modalTrigger}).`);
        }
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }), 
    __metadata('design:type', String)
], ModalElement.prototype, "id", void 0);
ModalElement = __decorate([
    customElement(config.modal),
    inlineView("<template><content></content></template>"), 
    __metadata('design:paramtypes', [])
], ModalElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbW9kYWxzL21vZGFsRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQjtPQUM3RSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQjtBQUl2QztJQUFBO1FBR1csT0FBRSxHQUFXLElBQUksQ0FBQztJQVE3QixDQUFDO0lBTlUsUUFBUTtRQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLE1BQU0sQ0FBQyxLQUFLLElBQUk7Z0JBQzlELDRDQUE0QyxNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUN6RixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFURztJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7d0NBQUE7QUFKMUQ7SUFBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixVQUFVLENBQUMsMENBQTBDLENBQUM7O2dCQUFBO0FBWXREIiwiZmlsZSI6ImphdmFzY3JpcHQvbW9kYWxzL21vZGFsRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tRWxlbWVudCwgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5tb2RhbClcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGNvbnRlbnQ+PC9jb250ZW50PjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEVsZW1lbnQge1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSB9KVxyXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaWQgfHwgdGhpcy5pZC50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaWQgaXMgYSByZXF1aXJlZCBhdHRyaWJ1dGUgZm9yIHRoZSBlbGVtZW50ICR7Y29uZmlnLm1vZGFsfSwgYCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgeW91IG5lZWQgdG8gc2V0IGl0IG9uIHlvdXIgbW9kYWwgdHJpZ2dlcigke2NvbmZpZy5tb2RhbFRyaWdnZXJ9KS5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
