var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "../../config"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, config_1) {
    "use strict";
    var DropdownAttribute = (function () {
        function DropdownAttribute(element) {
            this.element = element;
        }
        DropdownAttribute.prototype.attached = function () {
            var options = {
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
        };
        DropdownAttribute.prototype.deattached = function () {
            this.element.classList.remove("dropdown-button");
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], DropdownAttribute.prototype, "title", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: "left" }), 
            __metadata('design:type', String)
        ], DropdownAttribute.prototype, "alignment", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
            __metadata('design:type', Boolean)
        ], DropdownAttribute.prototype, "belowOrigin", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: true }), 
            __metadata('design:type', Boolean)
        ], DropdownAttribute.prototype, "constrainWidth", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 0 }), 
            __metadata('design:type', Number)
        ], DropdownAttribute.prototype, "gutter", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
            __metadata('design:type', Boolean)
        ], DropdownAttribute.prototype, "hover", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 300 }), 
            __metadata('design:type', Number)
        ], DropdownAttribute.prototype, "inDuration", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 225 }), 
            __metadata('design:type', Number)
        ], DropdownAttribute.prototype, "outDuration", void 0);
        DropdownAttribute = __decorate([
            aurelia_framework_1.customAttribute(config_1.config.dropdown),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], DropdownAttribute);
        return DropdownAttribute;
    }());
    exports.DropdownAttribute = DropdownAttribute;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25BdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFPQTtRQUVJLDJCQUFvQixPQUFnQjtZQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3BDLENBQUM7UUEwQk0sb0NBQVEsR0FBZjtZQUVJLElBQUksT0FBTyxHQUFnQztnQkFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQ2hDLENBQUM7WUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRU0sc0NBQVUsR0FBakI7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBMUNEO1lBQUMsNEJBQVEsRUFBRTs7d0RBQUE7UUFHWDtZQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUM7OzREQUFBO1FBRzNFO1lBQUMsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7OERBQUE7UUFHM0U7WUFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDOztpRUFBQTtRQUcxRTtZQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7O3lEQUFBO1FBR3ZFO1lBQUMsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7d0RBQUE7UUFHM0U7WUFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDOzs2REFBQTtRQUd6RTtZQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7OzhEQUFBO1FBNUI3RTtZQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxxQ0FBTSxDQUFDLE9BQU8sQ0FBQzs7NkJBQUE7UUFpRGhCLHdCQUFDO0lBQUQsQ0FoREEsQUFnREMsSUFBQTtJQWhEWSx5QkFBaUIsb0JBZ0Q3QixDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25BdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSwgYmluZGluZ01vZGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcuZHJvcGRvd24pXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQXR0cmlidXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IFwibGVmdFwifSlcclxuICAgIHB1YmxpYyBhbGlnbm1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSlcclxuICAgIHB1YmxpYyBiZWxvd09yaWdpbjogYm9vbGVhbjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KVxyXG4gICAgcHVibGljIGNvbnN0cmFpbldpZHRoOiBib29sZWFuO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiAwIH0pXHJcbiAgICBwdWJsaWMgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgaG92ZXI6IGJvb2xlYW47XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IDMwMCB9KVxyXG4gICAgcHVibGljIGluRHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogMjI1IH0pXHJcbiAgICBwdWJsaWMgb3V0RHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Ecm9wRG93bk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGFsaWdubWVudDogdGhpcy5hbGlnbm1lbnQsXHJcbiAgICAgICAgICAgIGJlbG93T3JpZ2luOiB0aGlzLmJlbG93T3JpZ2luLFxyXG4gICAgICAgICAgICBjb25zdHJhaW5fd2lkdGg6IHRoaXMuY29uc3RyYWluV2lkdGgsXHJcbiAgICAgICAgICAgIGd1dHRlcjogdGhpcy5ndXR0ZXIsXHJcbiAgICAgICAgICAgIGhvdmVyOiB0aGlzLmhvdmVyLFxyXG4gICAgICAgICAgICBpbkR1cmF0aW9uOiB0aGlzLmluRHVyYXRpb24sXHJcbiAgICAgICAgICAgIG91dER1cmF0aW9uOiB0aGlzLm91dER1cmF0aW9uLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tYnV0dG9uXCIpO1xyXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5kcm9wZG93bihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLWJ1dHRvblwiKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
