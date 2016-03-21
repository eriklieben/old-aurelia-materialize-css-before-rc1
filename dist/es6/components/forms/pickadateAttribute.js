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
export let PickADateAttribute = class PickADateAttribute {
    constructor(element) {
        this.element = element;
        this.options = {};
    }
    attached() {
        this.element.classList.add("datepicker");
        $(this.element).pickadate(this.options);
        this.picker = $(this.element).pickadate("picker");
        this.element.addEventListener("focus", this.openFunction.bind(this));
        $(this.picker).on({ "set": this.onSet.bind(this) });
    }
    detached() {
        this.element.classList.remove("datepicker");
        this.element.removeEventListener("focus", this.openFunction);
        if (this.picker) {
            $(this.picker).stop();
        }
    }
    onSet(value) {
        this.fireEvent(this.element, "input");
    }
    valueChanged(newValue) {
        this.picker.set("select", newValue);
    }
    openFunction() {
        this.picker.open();
    }
    createEvent(name) {
        let event = document.createEvent("Event");
        event.initEvent(name, true, true);
        return event;
    }
    fireEvent(element, name) {
        element.dispatchEvent(this.createEvent(name));
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], PickADateAttribute.prototype, "options", void 0);
PickADateAttribute = __decorate([
    customAttribute(config.pickadate),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], PickADateAttribute);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvcGlja2FkYXRlQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQjtPQUN0RCxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QjtPQUM5QyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQjtBQUl2QztJQUVJLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFJN0IsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUhwQixDQUFDO0lBT00sUUFBUTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLFlBQVksQ0FBQyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBSTtRQUNwQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUk7UUFDM0IsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztBQUNMLENBQUM7QUExQ0c7SUFBQyxRQUFRLEVBQUU7O21EQUFBO0FBUGY7SUFBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDOztzQkFBQTtBQWdEZiIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL3BpY2thZGF0ZUF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5waWNrYWRhdGUpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFBpY2tBRGF0ZUF0dHJpYnV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBvcHRpb25zID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBwaWNrZXI7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGF0ZXBpY2tlclwiKTtcclxuICAgICAgICAkKHRoaXMuZWxlbWVudCkucGlja2FkYXRlKHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5waWNrZXIgPSAkKHRoaXMuZWxlbWVudCkucGlja2FkYXRlKFwicGlja2VyXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5vcGVuRnVuY3Rpb24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgJCh0aGlzLnBpY2tlcikub24oeyBcInNldFwiIDogdGhpcy5vblNldC5iaW5kKHRoaXMpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhdGVwaWNrZXJcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLm9wZW5GdW5jdGlvbik7XHJcbiAgICAgICAgaWYgKHRoaXMucGlja2VyKSB7XHJcbiAgICAgICAgICAgICQodGhpcy5waWNrZXIpLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2V0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQodGhpcy5lbGVtZW50LCBcImlucHV0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZUNoYW5nZWQobmV3VmFsdWUpIHtcclxuICAgICAgICB0aGlzLnBpY2tlci5zZXQoXCJzZWxlY3RcIiwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbkZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucGlja2VyLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUV2ZW50KG5hbWUpIHtcclxuICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xyXG4gICAgICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaXJlRXZlbnQoZWxlbWVudCwgbmFtZSkge1xyXG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLmNyZWF0ZUV2ZW50KG5hbWUpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
