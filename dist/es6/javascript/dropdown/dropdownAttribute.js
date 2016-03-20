var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customAttribute, bindable, bindingMode } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "../../config";
export let DropdownAttribute = class DropdownAttribute {
    constructor(element) {
        this.element = element;
    }
    attached() {
        let options = {
            alignment: this.alignment,
            belowOrigin: this.belowOrigin,
            constrain_width: this.constrainWidth,
            gutter: this.gutter,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
        };
        this.element.classList.add("dropdown-button");
        $(this.element).dropdown(options);
    }
    deattached() {
        this.element.classList.remove("dropdown-button");
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', String)
], DropdownAttribute.prototype, "title", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: "left" }), 
    __metadata('design:type', String)
], DropdownAttribute.prototype, "alignment", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false }), 
    __metadata('design:type', Boolean)
], DropdownAttribute.prototype, "belowOrigin", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: true }), 
    __metadata('design:type', Boolean)
], DropdownAttribute.prototype, "constrainWidth", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 0 }), 
    __metadata('design:type', Number)
], DropdownAttribute.prototype, "gutter", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false }), 
    __metadata('design:type', Boolean)
], DropdownAttribute.prototype, "hover", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 300 }), 
    __metadata('design:type', Number)
], DropdownAttribute.prototype, "inDuration", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 225 }), 
    __metadata('design:type', Number)
], DropdownAttribute.prototype, "outDuration", void 0);
DropdownAttribute = __decorate([
    customAttribute(config.dropdown),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], DropdownAttribute);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25BdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQ08sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQjtPQUNuRSxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QjtPQUM5QyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWM7QUFJckM7SUFFSSxZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ3BDLENBQUM7SUEwQk0sUUFBUTtRQUVYLElBQUksT0FBTyxHQUFnQztZQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxVQUFVO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckQsQ0FBQztBQUNMLENBQUM7QUEzQ0c7SUFBQyxRQUFRLEVBQUU7O2dEQUFBO0FBR1g7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FBQzs7b0RBQUE7QUFHM0U7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7c0RBQUE7QUFHM0U7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eURBQUE7QUFHMUU7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQzs7aURBQUE7QUFHdkU7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7Z0RBQUE7QUFHM0U7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQzs7cURBQUE7QUFHekU7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQzs7c0RBQUE7QUE1QjdFO0lBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7cUJBQUE7QUFpRGYiLCJmaWxlIjoiamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5kcm9wZG93bilcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25BdHRyaWJ1dGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJsZWZ0XCJ9KVxyXG4gICAgcHVibGljIGFsaWdubWVudDogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIGJlbG93T3JpZ2luOiBib29sZWFuO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiB0cnVlIH0pXHJcbiAgICBwdWJsaWMgY29uc3RyYWluV2lkdGg6IGJvb2xlYW47XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IDAgfSlcclxuICAgIHB1YmxpYyBndXR0ZXI6IG51bWJlcjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSlcclxuICAgIHB1YmxpYyBob3ZlcjogYm9vbGVhbjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogMzAwIH0pXHJcbiAgICBwdWJsaWMgaW5EdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiAyMjUgfSlcclxuICAgIHB1YmxpYyBvdXREdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1hdGVyaWFsaXplLkRyb3BEb3duT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB0aGlzLmFsaWdubWVudCxcclxuICAgICAgICAgICAgYmVsb3dPcmlnaW46IHRoaXMuYmVsb3dPcmlnaW4sXHJcbiAgICAgICAgICAgIGNvbnN0cmFpbl93aWR0aDogdGhpcy5jb25zdHJhaW5XaWR0aCxcclxuICAgICAgICAgICAgZ3V0dGVyOiB0aGlzLmd1dHRlcixcclxuICAgICAgICAgICAgaG92ZXI6IHRoaXMuaG92ZXIsXHJcbiAgICAgICAgICAgIGluRHVyYXRpb246IHRoaXMuaW5EdXJhdGlvbixcclxuICAgICAgICAgICAgb3V0RHVyYXRpb246IHRoaXMub3V0RHVyYXRpb24sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1idXR0b25cIik7XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmRyb3Bkb3duKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tYnV0dG9uXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
