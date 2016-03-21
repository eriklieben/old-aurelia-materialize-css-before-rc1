var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, containerless, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";
export let SliderElement = class SliderElement {
    attached() {
        let options = { full_width: false };
        if (this.fullscreen) {
            this.sliderDiv.classList.add("fullscreen");
            options.full_width = true;
        }
        $(this.sliderDiv).slider(options);
    }
    detached() {
        this.sliderDiv.classList.remove("fullscreen");
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', String)
], SliderElement.prototype, "id", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false }), 
    __metadata('design:type', Boolean)
], SliderElement.prototype, "fullscreen", void 0);
SliderElement = __decorate([
    customElement(config.slider),
    containerless,
    inlineView("<template><div class='slider' ref='sliderDiv' id='${id}'><ul class='slides'><content></content></ul></div></template>"), 
    __metadata('design:paramtypes', [])
], SliderElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbWVkaWEvc2xpZGVyRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUI7T0FDNUYsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0I7QUFLdkM7SUFVVyxRQUFRO1FBRVgsSUFBSSxPQUFPLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFFcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUM7UUFFRCxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0FBQ0wsQ0FBQztBQXZCRztJQUFDLFFBQVEsRUFBRTs7eUNBQUE7QUFHWDtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOztpREFBQTtBQVIvRTtJQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVCLGFBQWE7SUFDYixVQUFVLENBQUMsdUhBQXVILENBQUM7O2lCQUFBO0FBMEJuSSIsImZpbGUiOiJqYXZhc2NyaXB0L21lZGlhL3NsaWRlckVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGNvbnRhaW5lcmxlc3MsIGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuc2xpZGVyKVxyXG5AY29udGFpbmVybGVzc1xyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48ZGl2IGNsYXNzPSdzbGlkZXInIHJlZj0nc2xpZGVyRGl2JyBpZD0nJHtpZH0nPjx1bCBjbGFzcz0nc2xpZGVzJz48Y29udGVudD48L2NvbnRlbnQ+PC91bD48L2Rpdj48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHNsaWRlckRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHsgZnVsbF93aWR0aDogZmFsc2UgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mdWxsX3dpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcy5zbGlkZXJEaXYpLnNsaWRlcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJEaXYuY2xhc3NMaXN0LnJlbW92ZShcImZ1bGxzY3JlZW5cIik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
