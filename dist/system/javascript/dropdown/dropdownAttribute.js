System.register(["aurelia-framework", "aurelia-dependency-injection", "./../../config"], function(exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_dependency_injection_1, config_1;
    var DropdownAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            DropdownAttribute = (function () {
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
            exports_1("DropdownAttribute", DropdownAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25BdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSSwyQkFBb0IsT0FBZ0I7b0JBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7Z0JBQ3BDLENBQUM7Z0JBMEJNLG9DQUFRLEdBQWY7b0JBRUksSUFBSSxPQUFPLEdBQWdDO3dCQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7d0JBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVzt3QkFDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjO3dCQUNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07d0JBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDakIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO3dCQUMzQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQ2hDLENBQUM7b0JBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVNLHNDQUFVLEdBQWpCO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQTFDRDtvQkFBQyw0QkFBUSxFQUFFOztnRUFBQTtnQkFHWDtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDOztvRUFBQTtnQkFHM0U7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7c0VBQUE7Z0JBRzNFO29CQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lFQUFBO2dCQUcxRTtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDOztpRUFBQTtnQkFHdkU7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7Z0VBQUE7Z0JBRzNFO29CQUFDLDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7O3FFQUFBO2dCQUd6RTtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDOztzRUFBQTtnQkE1QjdFO29CQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDaEMscUNBQU0sQ0FBQyxPQUFPLENBQUM7O3FDQUFBO2dCQWlEaEIsd0JBQUM7WUFBRCxDQWhEQSxBQWdEQyxJQUFBO1lBaERELGlEQWdEQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25BdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSwgYmluZGluZ01vZGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5kcm9wZG93bilcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25BdHRyaWJ1dGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJsZWZ0XCJ9KVxyXG4gICAgcHVibGljIGFsaWdubWVudDogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIGJlbG93T3JpZ2luOiBib29sZWFuO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiB0cnVlIH0pXHJcbiAgICBwdWJsaWMgY29uc3RyYWluV2lkdGg6IGJvb2xlYW47XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IDAgfSlcclxuICAgIHB1YmxpYyBndXR0ZXI6IG51bWJlcjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSlcclxuICAgIHB1YmxpYyBob3ZlcjogYm9vbGVhbjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogMzAwIH0pXHJcbiAgICBwdWJsaWMgaW5EdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiAyMjUgfSlcclxuICAgIHB1YmxpYyBvdXREdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1hdGVyaWFsaXplLkRyb3BEb3duT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB0aGlzLmFsaWdubWVudCxcclxuICAgICAgICAgICAgYmVsb3dPcmlnaW46IHRoaXMuYmVsb3dPcmlnaW4sXHJcbiAgICAgICAgICAgIGNvbnN0cmFpbl93aWR0aDogdGhpcy5jb25zdHJhaW5XaWR0aCxcclxuICAgICAgICAgICAgZ3V0dGVyOiB0aGlzLmd1dHRlcixcclxuICAgICAgICAgICAgaG92ZXI6IHRoaXMuaG92ZXIsXHJcbiAgICAgICAgICAgIGluRHVyYXRpb246IHRoaXMuaW5EdXJhdGlvbixcclxuICAgICAgICAgICAgb3V0RHVyYXRpb246IHRoaXMub3V0RHVyYXRpb24sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1idXR0b25cIik7XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmRyb3Bkb3duKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tYnV0dG9uXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
