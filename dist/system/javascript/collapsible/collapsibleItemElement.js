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
    var CollapsibleItemElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CollapsibleItemElement = (function () {
                function CollapsibleItemElement() {
                }
                CollapsibleItemElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.collapsibleItem),
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.inlineView("<template><li><content></content></li></template>"), 
                    __metadata('design:paramtypes', [])
                ], CollapsibleItemElement);
                return CollapsibleItemElement;
            }());
            exports_1("CollapsibleItemElement", CollapsibleItemElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQUNBLENBQUM7Z0JBSkQ7b0JBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsZUFBZSxDQUFDO29CQUNyQyxpQ0FBYTtvQkFDYiw4QkFBVSxDQUFDLG1EQUFtRCxDQUFDOzswQ0FBQTtnQkFFaEUsNkJBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELDJEQUNDLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUl0ZW1FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuY29sbGFwc2libGVJdGVtKVxyXG5AY29udGFpbmVybGVzc1xyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48bGk+PGNvbnRlbnQ+PC9jb250ZW50PjwvbGk+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlSXRlbUVsZW1lbnQge1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
