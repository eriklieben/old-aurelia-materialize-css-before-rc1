var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, containerless, customElement } from "aurelia-framework";
import { config } from "./../../config";
export let SliderElement = class SliderElement {
    attached() {
        let options = { full_width: false };
        if (this.fullscreen) {
            this.sliderDiv.classList.add("fullscreen");
            options.full_width = true;
        }
        $(this.sliderDiv).slider(options);
    }
    detached() {
        this.sliderDiv.classList.remove("fullscreen");
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', String)
], SliderElement.prototype, "id", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false }), 
    __metadata('design:type', Boolean)
], SliderElement.prototype, "fullscreen", void 0);
SliderElement = __decorate([
    customElement(config.slider),
    containerless, 
    __metadata('design:paramtypes', [])
], SliderElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbWVkaWEvc2xpZGVyRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQjtPQUNoRixFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQjtBQUl2QztJQVVXLFFBQVE7UUFFWCxJQUFJLE9BQU8sR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztRQUVELENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7QUFDTCxDQUFDO0FBdkJHO0lBQUMsUUFBUSxFQUFFOzt5Q0FBQTtBQUdYO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7O2lEQUFBO0FBUC9FO0lBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDNUIsYUFBYTs7aUJBQUE7QUEwQmIiLCJmaWxlIjoiamF2YXNjcmlwdC9tZWRpYS9zbGlkZXJFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjb250YWluZXJsZXNzLCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLnNsaWRlcilcclxuQGNvbnRhaW5lcmxlc3NcclxuZXhwb3J0IGNsYXNzIFNsaWRlckVsZW1lbnQge1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSlcclxuICAgIHB1YmxpYyBmdWxsc2NyZWVuOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBzbGlkZXJEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7IGZ1bGxfd2lkdGg6IGZhbHNlIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJEaXYuY2xhc3NMaXN0LmFkZChcImZ1bGxzY3JlZW5cIik7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZnVsbF93aWR0aCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHRoaXMuc2xpZGVyRGl2KS5zbGlkZXIob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
