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
    var SlideElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            SlideElement = (function () {
                function SlideElement() {
                }
                SlideElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.slide),
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.inlineView("<template><li><content></content></li></template>"), 
                    __metadata('design:paramtypes', [])
                ], SlideElement);
                return SlideElement;
            }());
            exports_1("SlideElement", SlideElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbWVkaWEvc2xpZGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFMRDtvQkFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLGlDQUFhO29CQUNiLDhCQUFVLENBQUMsbURBQW1ELENBQUM7O2dDQUFBO2dCQUdoRSxtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L21lZGlhL3NsaWRlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHtjb25maWd9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLnNsaWRlKVxyXG5AY29udGFpbmVybGVzc1xyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48bGk+PGNvbnRlbnQ+PC9jb250ZW50PjwvbGk+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIFNsaWRlRWxlbWVudCB7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
