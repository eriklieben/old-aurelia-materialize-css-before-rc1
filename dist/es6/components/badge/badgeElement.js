var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";
export let BadgeElement = class BadgeElement {
};
__decorate([
    bindable({ bindingMode: bindingMode.twoWay, defaultValue: false }), 
    __metadata('design:type', String)
], BadgeElement.prototype, "new", void 0);
BadgeElement = __decorate([
    customElement(config.badge),
    inlineView("<template><span class='badge ${new}'><content></content></span></template>"), 
    __metadata('design:paramtypes', [])
], BadgeElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CO09BQzdFLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCO0FBSXZDO0FBSUEsQ0FBQztBQUZHO0lBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzt5Q0FBQTtBQUp2RTtJQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzNCLFVBQVUsQ0FBQyw0RUFBNEUsQ0FBQzs7Z0JBQUE7QUFLeEYiLCJmaWxlIjoiY29tcG9uZW50cy9iYWRnZS9iYWRnZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuYmFkZ2UpXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxzcGFuIGNsYXNzPSdiYWRnZSAke25ld30nPjxjb250ZW50PjwvY29udGVudD48L3NwYW4+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIEJhZGdlRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgYmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIG5ldzogc3RyaW5nO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
