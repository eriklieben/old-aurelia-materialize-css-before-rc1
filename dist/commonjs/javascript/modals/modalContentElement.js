"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var config_1 = require("./../../config");
var ModelContentElement = (function () {
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
exports.ModelContentElement = ModelContentElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbW9kYWxzL21vZGFsQ29udGVudEVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtDQUFtRSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3ZGLHVCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBS3hDO0lBQUE7SUFHQSxDQUFDO0lBRkc7UUFBQyw0QkFBUTs7c0RBQUE7SUFKYjtRQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQztRQUNsQyxpQ0FBYTtRQUNiLDhCQUFVLENBQUMsb0ZBQW9GLENBQUM7OzJCQUFBO0lBSWpHLDBCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSwyQkFBbUIsc0JBRy9CLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxDb250ZW50RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGlubGluZVZpZXcsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLm1vZGFsQ29udGVudClcclxuQGNvbnRhaW5lcmxlc3NcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCAke2NsYXNzfSc+PGNvbnRlbnQ+PC9jb250ZW50PjwvZGl2PjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBNb2RlbENvbnRlbnRFbGVtZW50IHtcclxuICAgIEBiaW5kYWJsZVxyXG4gICAgcHVibGljIGNsYXNzOiBzdHJpbmc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
