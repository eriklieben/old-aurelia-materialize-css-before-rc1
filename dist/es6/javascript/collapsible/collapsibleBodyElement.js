var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, containerless, inlineView, bindable } from "aurelia-framework";
import { config } from "'../../config";
export let CollapsibleBodyElement = class CollapsibleBodyElement {
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], CollapsibleBodyElement.prototype, "class", void 0);
CollapsibleBodyElement = __decorate([
    customElement(config.collapsibleBody),
    containerless,
    inlineView("<template><div class='collapsible-body ${class}'><content></content></div></template>"), 
    __metadata('design:paramtypes', [])
], CollapsibleBodyElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5RWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQjtPQUMvRSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWU7QUFLdEM7QUFHQSxDQUFDO0FBRkc7SUFBQyxRQUFROztxREFBQTtBQUpiO0lBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDckMsYUFBYTtJQUNiLFVBQVUsQ0FBQyx1RkFBdUYsQ0FBQzs7MEJBQUE7QUFJbkciLCJmaWxlIjoiamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldywgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIicuLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jb2xsYXBzaWJsZUJvZHkpXHJcbkBjb250YWluZXJsZXNzXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxkaXYgY2xhc3M9J2NvbGxhcHNpYmxlLWJvZHkgJHtjbGFzc30nPjxjb250ZW50PjwvY29udGVudD48L2Rpdj48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVCb2R5RWxlbWVudCB7XHJcbiAgICBAYmluZGFibGVcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
