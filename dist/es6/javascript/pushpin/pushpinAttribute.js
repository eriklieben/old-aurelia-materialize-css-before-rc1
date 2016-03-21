var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customAttribute, bindable } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";
export let PushpinAttribute = class PushpinAttribute {
    constructor(element) {
        this.element = element;
        this.bottom = Infinity;
        this.offset = 0;
        this.top = 0;
    }
    attached() {
        let options = {
            bottom: this.bottom,
            offset: this.offset,
            top: this.top,
        };
        $(this.element).pushpin(options);
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], PushpinAttribute.prototype, "bottom", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], PushpinAttribute.prototype, "offset", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], PushpinAttribute.prototype, "top", void 0);
PushpinAttribute = __decorate([
    customAttribute(config.pushpin),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], PushpinAttribute);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQjtPQUN0RCxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QjtPQUM5QyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQjtBQUl2QztJQVdJLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFSN0IsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUdsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBR1gsUUFBRyxHQUFHLENBQUMsQ0FBQztJQUdmLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxPQUFPLEdBQUc7WUFDVixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztTQUNoQixDQUFDO1FBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztBQUNMLENBQUM7QUFwQkc7SUFBQyxRQUFRLEVBQUU7O2dEQUFBO0FBR1g7SUFBQyxRQUFRLEVBQUU7O2dEQUFBO0FBR1g7SUFBQyxRQUFRLEVBQUU7OzZDQUFBO0FBVmY7SUFBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDOztvQkFBQTtBQXVCZiIsImZpbGUiOiJqYXZhc2NyaXB0L3B1c2hwaW4vcHVzaHBpbkF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5wdXNocGluKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBQdXNocGluQXR0cmlidXRlIHtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIGJvdHRvbSA9IEluZmluaXR5O1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIHRvcCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxyXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnB1c2hwaW4ob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
