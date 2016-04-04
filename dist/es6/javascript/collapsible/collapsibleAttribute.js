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
export let CollapsibleAttribute = class CollapsibleAttribute {
    constructor(element) {
        this.element = element;
    }
    attached() {
        this.element.classList.add("collapsible");
        this.element.setAttribute("data-collapsible", this.type);
        if (this.class !== undefined && this.class !== null) {
            this.class.split(" ").forEach(element => {
                if (element !== '') {
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
    bindable({ defaultValue: "accordion" }), 
    __metadata('design:type', String)
], CollapsibleAttribute.prototype, "type", void 0);
__decorate([
    bindable({ defaultValue: "" }), 
    __metadata('design:type', String)
], CollapsibleAttribute.prototype, "class", void 0);
CollapsibleAttribute = __decorate([
    customAttribute(config.collapsible),
    inject(Element), 
    __metadata('design:paramtypes', [HTMLUListElement])
], CollapsibleAttribute);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQ08sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CO09BQ3RELEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCO09BQzlDLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCO0FBSXZDO0lBUUksWUFBb0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFDN0MsQ0FBQztJQUVNLFFBQVE7UUFFWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDakMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBR2pELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBakNHO0lBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDOztrREFBQTtBQUd4QztJQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQzs7bURBQUE7QUFQbkM7SUFBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDOzt3QkFBQTtBQW9DZiIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5jb2xsYXBzaWJsZSlcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVBdHRyaWJ1dGUge1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRWYWx1ZTogXCJhY2NvcmRpb25cIiB9KVxyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0VmFsdWU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSFRNTFVMaXN0RWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzaWJsZVwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xsYXBzaWJsZVwiLCB0aGlzLnR5cGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFzcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuY2xhc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzcy5zcGxpdChcIiBcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5jb2xsYXBzaWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jb2xsYXBzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgLy8gVGhlcmUgc2hvdWxkIG5vdCBiZSBhbnkgY3NzIGNsYXNzIG9uIHRoZSB1bC5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
