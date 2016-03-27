var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, containerless, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";
export let IconElement = class IconElement {
    attached() {
        this.element.classList.add("material-icons");
        this.element.classList.add(this.size);
        this.element.innerHTML = this.type;
    }
    detached() {
        this.element.classList.remove("material-icons");
        this.element.classList.remove(this.size);
        this.element.innerHTML = "";
    }
};
__decorate([
    bindable({ defaultValue: "" }), 
    __metadata('design:type', String)
], IconElement.prototype, "type", void 0);
__decorate([
    bindable({ defaultValue: "small" }), 
    __metadata('design:type', String)
], IconElement.prototype, "size", void 0);
IconElement = __decorate([
    customElement(config.icon),
    containerless(),
    inlineView("<i ref='element'></i>"), 
    __metadata('design:paramtypes', [])
], IconElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWNvbi9pY29uRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQjtPQUMvRSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQjtBQUt2QztJQVVXLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0FBQ0wsQ0FBQztBQW5CRztJQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQzs7eUNBQUE7QUFHL0I7SUFBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7O3lDQUFBO0FBUnhDO0lBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUIsYUFBYSxFQUFFO0lBQ2YsVUFBVSxDQUFDLHVCQUF1QixDQUFDOztlQUFBO0FBc0JuQyIsImZpbGUiOiJjb21wb25lbnRzL2ljb24vaWNvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY29udGFpbmVybGVzcywgY3VzdG9tRWxlbWVudCwgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5pY29uKVxyXG5AY29udGFpbmVybGVzcygpXHJcbkBpbmxpbmVWaWV3KFwiPGkgcmVmPSdlbGVtZW50Jz48L2k+XCIpXHJcbmV4cG9ydCBjbGFzcyBJY29uRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRWYWx1ZTogXCJzbWFsbFwiIH0pXHJcbiAgICBwdWJsaWMgc2l6ZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWF0ZXJpYWwtaWNvbnNcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zaXplKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
