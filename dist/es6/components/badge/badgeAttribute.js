var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";
export let BadgeAttribute = class BadgeAttribute {
    constructor(element) {
        this.element = element;
    }
    attached() {
        this.element.classList.add("badge");
        if (this.new) {
            this.element.classList.add("new");
        }
    }
    detached() {
        this.element.classList.remove("badge");
    }
    newChanged() {
        (this.new) ? this.element.classList.add("new") : this.element.classList.remove("new");
    }
};
__decorate([
    bindable({ bindingMode: bindingMode.oneWay, defaultValue: false }), 
    __metadata('design:type', Boolean)
], BadgeAttribute.prototype, "new", void 0);
BadgeAttribute = __decorate([
    customAttribute(config.badge),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], BadgeAttribute);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQjtPQUNuRSxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QjtPQUM5QyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQjtBQUl2QztJQUVJLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQztJQUtNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxVQUFVO1FBQ2IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRixDQUFDO0FBRUwsQ0FBQztBQWxCRztJQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7MkNBQUE7QUFSdkU7SUFBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDOztrQkFBQTtBQXlCZiIsImZpbGUiOiJjb21wb25lbnRzL2JhZGdlL2JhZGdlQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5iYWRnZSlcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgQmFkZ2VBdHRyaWJ1dGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBAYmluZGFibGUoeyBiaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lV2F5LCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbiAgICBwdWJsaWMgbmV3OiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhZGdlXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLm5ldykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ld1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmFkZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0NoYW5nZWQoKSB7XHJcbiAgICAgICAgKHRoaXMubmV3KSA/IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmV3XCIpIDogdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuZXdcIik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
