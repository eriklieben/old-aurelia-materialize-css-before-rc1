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
    var CollapsibleBodyElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CollapsibleBodyElement = (function () {
                function CollapsibleBodyElement() {
                }
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], CollapsibleBodyElement.prototype, "class", void 0);
                CollapsibleBodyElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.collapsibleBody),
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.inlineView("<template><div class='collapsible-body ${class}'><content></content></div></template>"), 
                    __metadata('design:paramtypes', [])
                ], CollapsibleBodyElement);
                return CollapsibleBodyElement;
            }());
            exports_1("CollapsibleBodyElement", CollapsibleBodyElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5RWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQUdBLENBQUM7Z0JBRkc7b0JBQUMsNEJBQVE7O3FFQUFBO2dCQUpiO29CQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLGVBQWUsQ0FBQztvQkFDckMsaUNBQWE7b0JBQ2IsOEJBQVUsQ0FBQyx1RkFBdUYsQ0FBQzs7MENBQUE7Z0JBSXBHLDZCQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCwyREFHQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGlubGluZVZpZXcsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLmNvbGxhcHNpYmxlQm9keSlcclxuQGNvbnRhaW5lcmxlc3NcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGRpdiBjbGFzcz0nY29sbGFwc2libGUtYm9keSAke2NsYXNzfSc+PGNvbnRlbnQ+PC9jb250ZW50PjwvZGl2PjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUJvZHlFbGVtZW50IHtcclxuICAgIEBiaW5kYWJsZVxyXG4gICAgcHVibGljIGNsYXNzOiBzdHJpbmc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
