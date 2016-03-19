System.register(["aurelia-framework", "aurelia-binding", "../../config"], function(exports_1, context_1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBZ0JBLENBQUM7Z0JBSFUscUNBQVEsR0FBZjtvQkFDSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO2dCQVhEO29CQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsNkJBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7OERBQUE7Z0JBRy9DO29CQUFDLDRCQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsNkJBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDOztnRUFBQTtnQkFHMUU7b0JBQUMsNEJBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSw2QkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUM7O2lFQUFBO2dCQVpyRTtvQkFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUM7b0JBQ2pDLGlDQUFhOztzQ0FBQTtnQkFpQmQseUJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELG1EQWdCQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgYmluZGluZ01vZGUgfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jb2xsYXBzaWJsZSlcclxuQGNvbnRhaW5lcmxlc3NcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlRWxlbWVudCB7XHJcblxyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lIH0pXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBcImFjY29yZGlvblwiIH0pXHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lLCBkZWZhdWx0VmFsdWU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICAkKHRoaXMuY29sbGFwc2libGUpLmNvbGxhcHNpYmxlKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
