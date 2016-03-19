var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "../../config";
export let CollapsibleBodyAttribute = class CollapsibleBodyAttribute {
    constructor(element) {
        this.element = element;
    }
    attached() {
        this.element.classList.add("collapsible-body");
    }
    deattached() {
        this.element.classList.remove("collapsible-body");
    }
};
CollapsibleBodyAttribute = __decorate([
    customAttribute(config.collapsibleBody),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], CollapsibleBodyAttribute);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5QXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CO09BQzVDLEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCO09BQzlDLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYztBQUlyQztJQUVJLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFDcEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sVUFBVTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7QUFFTCxDQUFDO0FBZkQ7SUFBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFDOzs0QkFBQTtBQWNmIiwiZmlsZSI6ImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5QXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoY29uZmlnLmNvbGxhcHNpYmxlQm9keSlcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVCb2R5QXR0cmlidXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzaWJsZS1ib2R5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2libGUtYm9keVwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
