var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, inlineView, bindable } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";
export let PushpinElement = class PushpinElement {
    constructor(element) {
        this.element = element;
        this.bottom = Infinity;
        this.offset = 0;
        this.top = 0;
    }
    attached() {
        let options = {
            bottom: this.bottom,
            offset: this.offset,
            top: this.top,
        };
        $(this.element).pushpin(options);
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], PushpinElement.prototype, "bottom", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], PushpinElement.prototype, "offset", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], PushpinElement.prototype, "top", void 0);
PushpinElement = __decorate([
    customElement(config.pushpin),
    inlineView("<template><content></content></template>"),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], PushpinElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CO09BQ2hFLEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCO09BQzlDLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCO0FBS3ZDO0lBV0ksWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVI3QixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBR2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFHWCxRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBR2YsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLE9BQU8sR0FBRztZQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1NBQ2hCLENBQUM7UUFFRixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0FBQ0wsQ0FBQztBQXJCRztJQUFDLFFBQVEsRUFBRTs7OENBQUE7QUFHWDtJQUFDLFFBQVEsRUFBRTs7OENBQUE7QUFHWDtJQUFDLFFBQVEsRUFBRTs7MkNBQUE7QUFYZjtJQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzdCLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQztJQUN0RCxNQUFNLENBQUMsT0FBTyxDQUFDOztrQkFBQTtBQXdCZiIsImZpbGUiOiJqYXZhc2NyaXB0L3B1c2hwaW4vcHVzaHBpbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBpbmxpbmVWaWV3LCBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5wdXNocGluKVxyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48Y29udGVudD48L2NvbnRlbnQ+PC90ZW1wbGF0ZT5cIilcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgUHVzaHBpbkVsZW1lbnQge1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgYm90dG9tID0gSW5maW5pdHk7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBvZmZzZXQgPSAwO1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgdG9wID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXHJcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnB1c2hwaW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
