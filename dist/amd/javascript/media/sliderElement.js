var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./../../config"], function (require, exports, aurelia_framework_1, config_1) {
    "use strict";
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbWVkaWEvc2xpZGVyRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBQUE7UUF5QkEsQ0FBQztRQWZVLGdDQUFRLEdBQWY7WUFFSSxJQUFJLE9BQU8sR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUVwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM5QixDQUFDO1lBRUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVNLGdDQUFRLEdBQWY7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQXRCRDtZQUFDLDRCQUFRLEVBQUU7O2lEQUFBO1FBR1g7WUFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzt5REFBQTtRQVAvRTtZQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM1QixpQ0FBYTs7eUJBQUE7UUEwQmQsb0JBQUM7SUFBRCxDQXpCQSxBQXlCQyxJQUFBO0lBekJZLHFCQUFhLGdCQXlCekIsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L21lZGlhL3NsaWRlckVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGNvbnRhaW5lcmxlc3MsIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuc2xpZGVyKVxyXG5AY29udGFpbmVybGVzc1xyXG5leHBvcnQgY2xhc3MgU2xpZGVyRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHNsaWRlckRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHsgZnVsbF93aWR0aDogZmFsc2UgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mdWxsX3dpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcy5zbGlkZXJEaXYpLnNsaWRlcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJEaXYuY2xhc3NMaXN0LnJlbW92ZShcImZ1bGxzY3JlZW5cIik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
