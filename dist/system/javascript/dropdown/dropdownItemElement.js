System.register(["aurelia-framework", "./../../config"], function(exports_1, context_1) {
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
    var DropdownItemElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            DropdownItemElement = (function () {
                function DropdownItemElement() {
                }
                DropdownItemElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.dropdownItem),
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.inlineView("<template><li><content></content></li></template>"), 
                    __metadata('design:paramtypes', [])
                ], DropdownItemElement);
                return DropdownItemElement;
            }());
            exports_1("DropdownItemElement", DropdownItemElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25JdGVtRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQUVBLENBQUM7Z0JBTEQ7b0JBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO29CQUNsQyxpQ0FBYTtvQkFDYiw4QkFBVSxDQUFDLG1EQUFtRCxDQUFDOzt1Q0FBQTtnQkFHaEUsMEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFEQUVDLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkl0ZW1FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5kcm9wZG93bkl0ZW0pXHJcbkBjb250YWluZXJsZXNzXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxsaT48Y29udGVudD48L2NvbnRlbnQ+PC9saT48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25JdGVtRWxlbWVudCB7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
