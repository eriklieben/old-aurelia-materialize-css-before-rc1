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
    var SliderElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            SliderElement = (function () {
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
                    aurelia_framework_1.inlineView("<template><div class='slider' ref='sliderDiv' id='${id}'><ul class='slides'><content></content></ul></div></template>"), 
                    __metadata('design:paramtypes', [])
                ], SliderElement);
                return SliderElement;
            }());
            exports_1("SliderElement", SliderElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvbWVkaWEvc2xpZGVyRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQXlCQSxDQUFDO2dCQWZVLGdDQUFRLEdBQWY7b0JBRUksSUFBSSxPQUFPLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBRXBDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzNDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUM5QixDQUFDO29CQUVELENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVNLGdDQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQXRCRDtvQkFBQyw0QkFBUSxFQUFFOzt5REFBQTtnQkFHWDtvQkFBQyw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOztpRUFBQTtnQkFSL0U7b0JBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDO29CQUM1QixpQ0FBYTtvQkFDYiw4QkFBVSxDQUFDLHVIQUF1SCxDQUFDOztpQ0FBQTtnQkEwQnBJLG9CQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCx5Q0F5QkMsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L21lZGlhL3NsaWRlckVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGNvbnRhaW5lcmxlc3MsIGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuc2xpZGVyKVxyXG5AY29udGFpbmVybGVzc1xyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48ZGl2IGNsYXNzPSdzbGlkZXInIHJlZj0nc2xpZGVyRGl2JyBpZD0nJHtpZH0nPjx1bCBjbGFzcz0nc2xpZGVzJz48Y29udGVudD48L2NvbnRlbnQ+PC91bD48L2Rpdj48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSwgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHNsaWRlckRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHsgZnVsbF93aWR0aDogZmFsc2UgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mdWxsX3dpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcy5zbGlkZXJEaXYpLnNsaWRlcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJEaXYuY2xhc3NMaXN0LnJlbW92ZShcImZ1bGxzY3JlZW5cIik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
