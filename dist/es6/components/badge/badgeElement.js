var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";
export let BadgeElement = class BadgeElement {
    attached() {
        this.badge.classList.add("badge");
        if (this.new) {
            this.badge.classList.add("new");
        }
    }
    detached() {
        this.badge.classList.remove("badge");
    }
    newChanged() {
        (this.new) ? this.badge.classList.add("new") : this.badge.classList.remove("new");
    }
};
__decorate([
    bindable({ defaultValue: false }), 
    __metadata('design:type', String)
], BadgeElement.prototype, "new", void 0);
BadgeElement = __decorate([
    customElement(config.badge),
    inlineView("<template><span ref='badge'><content></content></span></template>"), 
    __metadata('design:paramtypes', [])
], BadgeElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUI7T0FDaEUsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0I7QUFJdkM7SUFPVyxRQUFRO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sVUFBVTtRQUNiLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEYsQ0FBQztBQUVMLENBQUM7QUFwQkc7SUFBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7O3lDQUFBO0FBSnRDO0lBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDM0IsVUFBVSxDQUFDLG1FQUFtRSxDQUFDOztnQkFBQTtBQXVCL0UiLCJmaWxlIjoiY29tcG9uZW50cy9iYWRnZS9iYWRnZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5iYWRnZSlcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PHNwYW4gcmVmPSdiYWRnZSc+PGNvbnRlbnQ+PC9jb250ZW50Pjwvc3Bhbj48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgQmFkZ2VFbGVtZW50IHtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgbmV3OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGJhZGdlOiBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuYmFkZ2UuY2xhc3NMaXN0LmFkZChcImJhZGdlXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLm5ldykge1xyXG4gICAgICAgICAgICB0aGlzLmJhZGdlLmNsYXNzTGlzdC5hZGQoXCJuZXdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmJhZGdlLmNsYXNzTGlzdC5yZW1vdmUoXCJiYWRnZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3Q2hhbmdlZCgpIHtcclxuICAgICAgICAodGhpcy5uZXcpID8gdGhpcy5iYWRnZS5jbGFzc0xpc3QuYWRkKFwibmV3XCIpIDogdGhpcy5iYWRnZS5jbGFzc0xpc3QucmVtb3ZlKFwibmV3XCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
