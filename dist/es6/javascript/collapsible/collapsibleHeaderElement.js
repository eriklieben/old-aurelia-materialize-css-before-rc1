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
import { config } from "../../config";
export let CollapsibleHeaderElement = class CollapsibleHeaderElement {
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], CollapsibleHeaderElement.prototype, "class", void 0);
CollapsibleHeaderElement = __decorate([
    customElement(config.collapsibleHeader),
    containerless,
    inlineView("<template><div class='collapsible-header ${class}'><content></content></div></template>"), 
    __metadata('design:paramtypes', [])
], CollapsibleHeaderElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CO09BQy9FLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYztBQUtyQztBQUdBLENBQUM7QUFGRztJQUFDLFFBQVE7O3VEQUFBO0FBSmI7SUFBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQ3ZDLGFBQWE7SUFDYixVQUFVLENBQUMseUZBQXlGLENBQUM7OzRCQUFBO0FBSXJHIiwiZmlsZSI6ImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldywgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmNvbGxhcHNpYmxlSGVhZGVyKVxyXG5AY29udGFpbmVybGVzc1xyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48ZGl2IGNsYXNzPSdjb2xsYXBzaWJsZS1oZWFkZXIgJHtjbGFzc30nPjxjb250ZW50PjwvY29udGVudD48L2Rpdj48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVIZWFkZXJFbGVtZW50IHtcclxuICAgIEBiaW5kYWJsZVxyXG4gICAgcHVibGljIGNsYXNzOiBzdHJpbmc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
