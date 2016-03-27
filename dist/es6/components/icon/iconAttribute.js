var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";
export let IconAttribute = class IconAttribute {
    constructor(element) {
        this.element = element;
    }
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
], IconAttribute.prototype, "type", void 0);
__decorate([
    bindable({ defaultValue: "small" }), 
    __metadata('design:type', String)
], IconAttribute.prototype, "size", void 0);
IconAttribute = __decorate([
    customAttribute(config.icon),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], IconAttribute);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWNvbi9pY29uQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQjtPQUN0RCxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QjtPQUM5QyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQjtBQUl2QztJQUVJLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQztJQVFNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0FBQ0wsQ0FBQztBQWpCRztJQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MkNBQUE7QUFHL0I7SUFBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7OzJDQUFBO0FBWHhDO0lBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7aUJBQUE7QUF3QmYiLCJmaWxlIjoiY29tcG9uZW50cy9pY29uL2ljb25BdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcuaWNvbilcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgSWNvbkF0dHJpYnV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRWYWx1ZTogXCJcIiB9KVxyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0VmFsdWU6IFwic21hbGxcIiB9KVxyXG4gICAgcHVibGljIHNpemU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWF0ZXJpYWwtaWNvbnNcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zaXplKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
