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
export let DropdownElement = class DropdownElement {
    constructor() {
        this.id = null;
    }
    attached() {
        if (!this.id || this.id.trim().length === 0) {
            throw new Error(`id is a required attribute for the element ${config.dropdown}.`);
        }
        let options = {
            alignment: this.alignment,
            belowOrigin: this.belowOrigin,
            constrain_width: this.constrainWidth,
            gutter: this.gutter,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
        };
        $(this.dropdownBtn).dropdown(options);
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', String)
], DropdownElement.prototype, "title", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }), 
    __metadata('design:type', String)
], DropdownElement.prototype, "id", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: "left" }), 
    __metadata('design:type', String)
], DropdownElement.prototype, "alignment", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false }), 
    __metadata('design:type', Boolean)
], DropdownElement.prototype, "belowOrigin", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: true }), 
    __metadata('design:type', Boolean)
], DropdownElement.prototype, "constrainWidth", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 0 }), 
    __metadata('design:type', Number)
], DropdownElement.prototype, "gutter", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false }), 
    __metadata('design:type', Boolean)
], DropdownElement.prototype, "hover", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 300 }), 
    __metadata('design:type', Number)
], DropdownElement.prototype, "inDuration", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 225 }), 
    __metadata('design:type', Number)
], DropdownElement.prototype, "outDuration", void 0);
DropdownElement = __decorate([
    customElement(config.dropdown),
    containerless, 
    __metadata('design:paramtypes', [])
], DropdownElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25FbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CO09BQ2hGLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCO0FBSXZDO0lBQUE7UUFNVyxPQUFFLEdBQVcsSUFBSSxDQUFDO0lBMkM3QixDQUFDO0lBbEJVLFFBQVE7UUFFWCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBRUQsSUFBSSxPQUFPLEdBQWdDO1lBQ3ZDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNoQyxDQUFDO1FBRUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztBQUNMLENBQUM7QUEvQ0c7SUFBQyxRQUFRLEVBQUU7OzhDQUFBO0FBR1g7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7OzJDQUFBO0FBR3REO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7O2tEQUFBO0FBRzVFO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7O29EQUFBO0FBRzNFO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VEQUFBO0FBRzFFO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7OytDQUFBO0FBR3ZFO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7OzhDQUFBO0FBRzNFO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7O21EQUFBO0FBR3pFO0lBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7O29EQUFBO0FBNUI3RTtJQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzlCLGFBQWE7O21CQUFBO0FBa0RiIiwiZmlsZSI6ImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjb250YWluZXJsZXNzLCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmRyb3Bkb3duKVxyXG5AY29udGFpbmVybGVzc1xyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25FbGVtZW50IHtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lIH0pXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IFwibGVmdFwiIH0pXHJcbiAgICBwdWJsaWMgYWxpZ25tZW50OiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgYmVsb3dPcmlnaW46IGJvb2xlYW47XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IHRydWUgfSlcclxuICAgIHB1YmxpYyBjb25zdHJhaW5XaWR0aDogYm9vbGVhbjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogMCB9KVxyXG4gICAgcHVibGljIGd1dHRlcjogbnVtYmVyO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIGhvdmVyOiBib29sZWFuO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiAzMDAgfSlcclxuICAgIHB1YmxpYyBpbkR1cmF0aW9uOiBudW1iZXI7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IDIyNSB9KVxyXG4gICAgcHVibGljIG91dER1cmF0aW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGRyb3Bkb3duQnRuOiBIVE1MQW5jaG9yRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pZCB8fCB0aGlzLmlkLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpZCBpcyBhIHJlcXVpcmVkIGF0dHJpYnV0ZSBmb3IgdGhlIGVsZW1lbnQgJHtjb25maWcuZHJvcGRvd259LmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1hdGVyaWFsaXplLkRyb3BEb3duT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB0aGlzLmFsaWdubWVudCxcclxuICAgICAgICAgICAgYmVsb3dPcmlnaW46IHRoaXMuYmVsb3dPcmlnaW4sXHJcbiAgICAgICAgICAgIGNvbnN0cmFpbl93aWR0aDogdGhpcy5jb25zdHJhaW5XaWR0aCxcclxuICAgICAgICAgICAgZ3V0dGVyOiB0aGlzLmd1dHRlcixcclxuICAgICAgICAgICAgaG92ZXI6IHRoaXMuaG92ZXIsXHJcbiAgICAgICAgICAgIGluRHVyYXRpb246IHRoaXMuaW5EdXJhdGlvbixcclxuICAgICAgICAgICAgb3V0RHVyYXRpb246IHRoaXMub3V0RHVyYXRpb24sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmRyb3Bkb3duQnRuKS5kcm9wZG93bihvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
