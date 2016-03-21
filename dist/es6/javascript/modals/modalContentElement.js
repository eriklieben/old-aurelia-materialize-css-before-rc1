var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, containerless, inlineView, bindable } from "aurelia-framework";
import { config } from "./../../config";
export let ModelContentElement = class ModelContentElement {
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], ModelContentElement.prototype, "class", void 0);
ModelContentElement = __decorate([
    customElement(config.modalContent),
    containerless,
    inlineView("<template><div class='modal-content ${class}'><content></content></div></template>"), 
    __metadata('design:paramtypes', [])
], ModelContentElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbW9kYWxzL21vZGFsQ29udGVudEVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUI7T0FDL0UsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0I7QUFLdkM7QUFHQSxDQUFDO0FBRkc7SUFBQyxRQUFROztrREFBQTtBQUpiO0lBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDbEMsYUFBYTtJQUNiLFVBQVUsQ0FBQyxvRkFBb0YsQ0FBQzs7dUJBQUE7QUFJaEciLCJmaWxlIjoiamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxDb250ZW50RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGlubGluZVZpZXcsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLm1vZGFsQ29udGVudClcclxuQGNvbnRhaW5lcmxlc3NcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCAke2NsYXNzfSc+PGNvbnRlbnQ+PC9jb250ZW50PjwvZGl2PjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBNb2RlbENvbnRlbnRFbGVtZW50IHtcclxuICAgIEBiaW5kYWJsZVxyXG4gICAgcHVibGljIGNsYXNzOiBzdHJpbmc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
