var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";
export let CardTitleElement = class CardTitleElement {
    attached() {
        this.element.classList.add("card-title");
    }
    detached() {
        this.element.classList.remove("card-title");
    }
};
CardTitleElement = __decorate([
    customElement(config.cardTitle),
    containerless(),
    inlineView("<template><div ref='element'><content></content></div></template>"), 
    __metadata('design:paramtypes', [])
], CardTitleElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC9jYXJkVGl0bGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUI7T0FDckUsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0I7QUFLdkM7SUFJVyxRQUFRO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7QUFDTCxDQUFDO0FBZEQ7SUFBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUMvQixhQUFhLEVBQUU7SUFDZixVQUFVLENBQUMsbUVBQW1FLENBQUM7O29CQUFBO0FBWS9FIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FyZC9jYXJkVGl0bGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jYXJkVGl0bGUpXHJcbkBjb250YWluZXJsZXNzKClcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGRpdiByZWY9J2VsZW1lbnQnPjxjb250ZW50PjwvY29udGVudD48L2Rpdj48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgQ2FyZFRpdGxlRWxlbWVudCB7XHJcblxyXG4gICAgcHVibGljIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2FyZC10aXRsZVwiKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
