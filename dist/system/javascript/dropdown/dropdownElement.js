System.register(["aurelia-framework", "../../config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, config_1;
    var DropdownElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            DropdownElement = (function () {
                function DropdownElement() {
                    this.id = null;
                }
                DropdownElement.prototype.attached = function () {
                    if (!this.id || this.id.trim().length === 0) {
                        throw new Error("id is a required attribute for the element " + config_1.config.dropdown + ".");
                    }
                    var options = {
                        alignment: this.alignment,
                        belowOrigin: this.belowOrigin,
                        constrain_width: this.constrainWidth,
                        gutter: this.gutter,
                        hover: this.hover,
                        inDuration: this.inDuration,
                        outDuration: this.outDuration,
                    };
                    $(this.dropdownBtn).dropdown(options);
                };
                __decorate([
                    aurelia_framework_1.bindable(), 
                    __metadata('design:type', String)
                ], DropdownElement.prototype, "title", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
                    __metadata('design:type', String)
                ], DropdownElement.prototype, "id", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: "left" }), 
                    __metadata('design:type', String)
                ], DropdownElement.prototype, "alignment", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
                    __metadata('design:type', Boolean)
                ], DropdownElement.prototype, "belowOrigin", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: true }), 
                    __metadata('design:type', Boolean)
                ], DropdownElement.prototype, "constrainWidth", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 0 }), 
                    __metadata('design:type', Number)
                ], DropdownElement.prototype, "gutter", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
                    __metadata('design:type', Boolean)
                ], DropdownElement.prototype, "hover", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 300 }), 
                    __metadata('design:type', Number)
                ], DropdownElement.prototype, "inDuration", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 225 }), 
                    __metadata('design:type', Number)
                ], DropdownElement.prototype, "outDuration", void 0);
                DropdownElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.dropdown),
                    aurelia_framework_1.containerless, 
                    __metadata('design:paramtypes', [])
                ], DropdownElement);
                return DropdownElement;
            }());
            exports_1("DropdownElement", DropdownElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25FbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7b0JBTVcsT0FBRSxHQUFXLElBQUksQ0FBQztnQkEyQzdCLENBQUM7Z0JBbEJVLGtDQUFRLEdBQWY7b0JBRUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQThDLGVBQU0sQ0FBQyxRQUFRLE1BQUcsQ0FBQyxDQUFDO29CQUN0RixDQUFDO29CQUVELElBQUksT0FBTyxHQUFnQzt3QkFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO3dCQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7d0JBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYzt3QkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3dCQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTt3QkFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUNoQyxDQUFDO29CQUVGLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQTlDRDtvQkFBQyw0QkFBUSxFQUFFOzs4REFBQTtnQkFHWDtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7MkRBQUE7Z0JBR3REO29CQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7O2tFQUFBO2dCQUc1RTtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOztvRUFBQTtnQkFHM0U7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dUVBQUE7Z0JBRzFFO29CQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7OytEQUFBO2dCQUd2RTtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzs4REFBQTtnQkFHM0U7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQzs7bUVBQUE7Z0JBR3pFO29CQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7O29FQUFBO2dCQTVCN0U7b0JBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsUUFBUSxDQUFDO29CQUM5QixpQ0FBYTs7bUNBQUE7Z0JBa0RkLHNCQUFDO1lBQUQsQ0FqREEsQUFpREMsSUFBQTtZQWpERCw2Q0FpREMsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuZHJvcGRvd24pXHJcbkBjb250YWluZXJsZXNzXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkVsZW1lbnQge1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUgfSlcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJsZWZ0XCIgfSlcclxuICAgIHB1YmxpYyBhbGlnbm1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSlcclxuICAgIHB1YmxpYyBiZWxvd09yaWdpbjogYm9vbGVhbjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KVxyXG4gICAgcHVibGljIGNvbnN0cmFpbldpZHRoOiBib29sZWFuO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiAwIH0pXHJcbiAgICBwdWJsaWMgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgaG92ZXI6IGJvb2xlYW47XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IDMwMCB9KVxyXG4gICAgcHVibGljIGluRHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogMjI1IH0pXHJcbiAgICBwdWJsaWMgb3V0RHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZHJvcGRvd25CdG47XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaWQgfHwgdGhpcy5pZC50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaWQgaXMgYSByZXF1aXJlZCBhdHRyaWJ1dGUgZm9yIHRoZSBlbGVtZW50ICR7Y29uZmlnLmRyb3Bkb3dufS5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Ecm9wRG93bk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGFsaWdubWVudDogdGhpcy5hbGlnbm1lbnQsXHJcbiAgICAgICAgICAgIGJlbG93T3JpZ2luOiB0aGlzLmJlbG93T3JpZ2luLFxyXG4gICAgICAgICAgICBjb25zdHJhaW5fd2lkdGg6IHRoaXMuY29uc3RyYWluV2lkdGgsXHJcbiAgICAgICAgICAgIGd1dHRlcjogdGhpcy5ndXR0ZXIsXHJcbiAgICAgICAgICAgIGhvdmVyOiB0aGlzLmhvdmVyLFxyXG4gICAgICAgICAgICBpbkR1cmF0aW9uOiB0aGlzLmluRHVyYXRpb24sXHJcbiAgICAgICAgICAgIG91dER1cmF0aW9uOiB0aGlzLm91dER1cmF0aW9uLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQodGhpcy5kcm9wZG93bkJ0bikuZHJvcGRvd24ob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
