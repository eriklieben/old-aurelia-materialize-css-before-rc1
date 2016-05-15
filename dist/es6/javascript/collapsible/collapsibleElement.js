var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";
export let CollapsibleElement = class CollapsibleElement {
    attached() {
        this.element.classList.add("collapsible");
        this.element.setAttribute("data-collapsible", this.type);
        if (this.class !== undefined && this.class !== null) {
            this.class.split(" ").forEach(element => {
                if (element !== "") {
                    this.element.classList.add(element);
                }
            });
        }
        $(this.element).collapsible();
    }
    detached() {
        this.element.removeAttribute("data-collapsible");
        for (let i = 0; i < this.element.classList.length; i++) {
            this.element.classList.remove(this.element.classList[i]);
        }
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', String)
], CollapsibleElement.prototype, "id", void 0);
__decorate([
    bindable({ defaultValue: "accordion" }), 
    __metadata('design:type', String)
], CollapsibleElement.prototype, "type", void 0);
__decorate([
    bindable({ defaultValue: "" }), 
    __metadata('design:type', String)
], CollapsibleElement.prototype, "class", void 0);
CollapsibleElement = __decorate([
    customElement(config.collapsible),
    containerless,
    inlineView("<template><ul ref='element' id='${id}'><content></content></ul></template>"), 
    __metadata('design:paramtypes', [])
], CollapsibleElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CO09BQy9FLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCO0FBS3ZDO0lBYVcsUUFBUTtRQUVYLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFHakQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFqQ0c7SUFBQyxRQUFRLEVBQUU7OzhDQUFBO0FBR1g7SUFBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUM7O2dEQUFBO0FBR3hDO0lBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDOztpREFBQTtBQWJuQztJQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ2pDLGFBQWE7SUFDYixVQUFVLENBQUMsNEVBQTRFLENBQUM7O3NCQUFBO0FBc0N4RiIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBpbmxpbmVWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmNvbGxhcHNpYmxlKVxyXG5AY29udGFpbmVybGVzc1xyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48dWwgcmVmPSdlbGVtZW50JyBpZD0nJHtpZH0nPjxjb250ZW50PjwvY29udGVudD48L3VsPjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUVsZW1lbnQge1xyXG5cclxuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MVUxpc3RFbGVtZW50O1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0VmFsdWU6IFwiYWNjb3JkaW9uXCIgfSlcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcIlwiIH0pXHJcbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2libGVcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sbGFwc2libGVcIiwgdGhpcy50eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhc3MgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmNsYXNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5jb2xsYXBzaWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jb2xsYXBzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgLy8gVGhlcmUgc2hvdWxkIG5vdCBiZSBhbnkgY3NzIGNsYXNzIG9uIHRoZSB1bC5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lbGVtZW50LmNsYXNzTGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
