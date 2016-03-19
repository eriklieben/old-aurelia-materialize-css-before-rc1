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
    var CollapsibleHeaderElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CollapsibleHeaderElement = (function () {
                function CollapsibleHeaderElement() {
                }
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], CollapsibleHeaderElement.prototype, "class", void 0);
                CollapsibleHeaderElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.collapsibleHeader),
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.inlineView("<template><div class='collapsible-header ${class}'><content></content></div></template>"), 
                    __metadata('design:paramtypes', [])
                ], CollapsibleHeaderElement);
                return CollapsibleHeaderElement;
            }());
            exports_1("CollapsibleHeaderElement", CollapsibleHeaderElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFGRztvQkFBQyw0QkFBUTs7dUVBQUE7Z0JBSmI7b0JBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsaUJBQWlCLENBQUM7b0JBQ3ZDLGlDQUFhO29CQUNiLDhCQUFVLENBQUMseUZBQXlGLENBQUM7OzRDQUFBO2dCQUl0RywrQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsK0RBR0MsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGlubGluZVZpZXcsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5jb2xsYXBzaWJsZUhlYWRlcilcclxuQGNvbnRhaW5lcmxlc3NcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGRpdiBjbGFzcz0nY29sbGFwc2libGUtaGVhZGVyICR7Y2xhc3N9Jz48Y29udGVudD48L2NvbnRlbnQ+PC9kaXY+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlSGVhZGVyRWxlbWVudCB7XHJcbiAgICBAYmluZGFibGVcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
