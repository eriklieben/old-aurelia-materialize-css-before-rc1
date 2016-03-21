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
    var ModelContentElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            ModelContentElement = (function () {
                function ModelContentElement() {
                }
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], ModelContentElement.prototype, "class", void 0);
                ModelContentElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.modalContent),
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.inlineView("<template><div class='modal-content ${class}'><content></content></div></template>"), 
                    __metadata('design:paramtypes', [])
                ], ModelContentElement);
                return ModelContentElement;
            }());
            exports_1("ModelContentElement", ModelContentElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbW9kYWxzL21vZGFsQ29udGVudEVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtnQkFHQSxDQUFDO2dCQUZHO29CQUFDLDRCQUFROztrRUFBQTtnQkFKYjtvQkFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7b0JBQ2xDLGlDQUFhO29CQUNiLDhCQUFVLENBQUMsb0ZBQW9GLENBQUM7O3VDQUFBO2dCQUlqRywwQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQscURBR0MsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L21vZGFscy9tb2RhbENvbnRlbnRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgaW5saW5lVmlldywgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcubW9kYWxDb250ZW50KVxyXG5AY29udGFpbmVybGVzc1xyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50ICR7Y2xhc3N9Jz48Y29udGVudD48L2NvbnRlbnQ+PC9kaXY+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIE1vZGVsQ29udGVudEVsZW1lbnQge1xyXG4gICAgQGJpbmRhYmxlXHJcbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZztcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
