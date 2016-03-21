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
var SliderElement = (function () {
    function SliderElement() {
    }
    SliderElement.prototype.attached = function () {
        var options = { full_width: false };
        if (this.fullscreen) {
            this.sliderDiv.classList.add("fullscreen");
            options.full_width = true;
        }
        $(this.sliderDiv).slider(options);
    };
    SliderElement.prototype.detached = function () {
        this.sliderDiv.classList.remove("fullscreen");
    };
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', String)
    ], SliderElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
        __metadata('design:type', Boolean)
    ], SliderElement.prototype, "fullscreen", void 0);
    SliderElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.slider),
        aurelia_framework_1.containerless, 
        __metadata('design:paramtypes', [])
    ], SliderElement);
    return SliderElement;
}());
exports.SliderElement = SliderElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbWVkaWEvc2xpZGVyRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQW9FLG1CQUFtQixDQUFDLENBQUE7QUFDeEYsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFJeEM7SUFBQTtJQXlCQSxDQUFDO0lBZlUsZ0NBQVEsR0FBZjtRQUVJLElBQUksT0FBTyxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDO1FBRUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXRCRDtRQUFDLDRCQUFRLEVBQUU7OzZDQUFBO0lBR1g7UUFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOztxREFBQTtJQVAvRTtRQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixpQ0FBYTs7cUJBQUE7SUEwQmQsb0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHFCQUFhLGdCQXlCekIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L21lZGlhL3NsaWRlckVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGNvbnRhaW5lcmxlc3MsIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuc2xpZGVyKVxyXG5AY29udGFpbmVybGVzc1xyXG5leHBvcnQgY2xhc3MgU2xpZGVyRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHNsaWRlckRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHsgZnVsbF93aWR0aDogZmFsc2UgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mdWxsX3dpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcy5zbGlkZXJEaXYpLnNsaWRlcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJEaXYuY2xhc3NMaXN0LnJlbW92ZShcImZ1bGxzY3JlZW5cIik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9