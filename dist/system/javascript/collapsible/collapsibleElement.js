System.register(["aurelia-framework", "aurelia-binding", "./../../config"], function(exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_binding_1, config_1;
    var CollapsibleElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CollapsibleElement = (function () {
                function CollapsibleElement() {
                }
                CollapsibleElement.prototype.attached = function () {
                    $(this.collapsible).collapsible();
                };
                __decorate([
                    aurelia_framework_1.bindable({ bindingMode: aurelia_binding_1.bindingMode.oneTime }), 
                    __metadata('design:type', String)
                ], CollapsibleElement.prototype, "id", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ bindingMode: aurelia_binding_1.bindingMode.oneTime, defaultValue: "accordion" }), 
                    __metadata('design:type', String)
                ], CollapsibleElement.prototype, "type", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ bindingMode: aurelia_binding_1.bindingMode.oneTime, defaultValue: "" }), 
                    __metadata('design:type', String)
                ], CollapsibleElement.prototype, "class", void 0);
                CollapsibleElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.collapsible),
                    aurelia_framework_1.containerless, 
                    __metadata('design:paramtypes', [])
                ], CollapsibleElement);
                return CollapsibleElement;
            }());
            exports_1("CollapsibleElement", CollapsibleElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBZ0JBLENBQUM7Z0JBSFUscUNBQVEsR0FBZjtvQkFDSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO2dCQVhEO29CQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsNkJBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7OERBQUE7Z0JBRy9DO29CQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsNkJBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDOztnRUFBQTtnQkFHMUU7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSw2QkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUM7O2lFQUFBO2dCQVpyRTtvQkFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUM7b0JBQ2pDLGlDQUFhOztzQ0FBQTtnQkFpQmQseUJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELG1EQWdCQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgYmluZGluZ01vZGUgfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmNvbGxhcHNpYmxlKVxyXG5AY29udGFpbmVybGVzc1xyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVFbGVtZW50IHtcclxuXHJcbiAgICBwdWJsaWMgY29sbGFwc2libGU7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUgfSlcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IFwiYWNjb3JkaW9uXCIgfSlcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLm9uZVRpbWUsIGRlZmF1bHRWYWx1ZTogXCJcIiB9KVxyXG4gICAgcHVibGljIGNsYXNzOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgICQodGhpcy5jb2xsYXBzaWJsZSkuY29sbGFwc2libGUoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
