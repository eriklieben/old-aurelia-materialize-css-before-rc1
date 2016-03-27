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
    var BadgeElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            BadgeElement = (function () {
                function BadgeElement() {
                }
                BadgeElement.prototype.attached = function () {
                    this.badge.classList.add("badge");
                    if (this.new) {
                        this.badge.classList.add("new");
                    }
                };
                BadgeElement.prototype.detached = function () {
                    this.badge.classList.remove("badge");
                };
                BadgeElement.prototype.newChanged = function () {
                    (this.new) ? this.badge.classList.add("new") : this.badge.classList.remove("new");
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultValue: false }), 
                    __metadata('design:type', String)
                ], BadgeElement.prototype, "new", void 0);
                BadgeElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.badge),
                    aurelia_framework_1.inlineView("<template><span ref='badge'><content></content></span></template>"), 
                    __metadata('design:paramtypes', [])
                ], BadgeElement);
                return BadgeElement;
            }());
            exports_1("BadgeElement", BadgeElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBc0JBLENBQUM7Z0JBZlUsK0JBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLCtCQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVNLGlDQUFVLEdBQWpCO29CQUNJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RGLENBQUM7Z0JBbEJEO29CQUFDLDRCQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7O3lEQUFBO2dCQUp0QztvQkFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLDhCQUFVLENBQUMsbUVBQW1FLENBQUM7O2dDQUFBO2dCQXVCaEYsbUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELHVDQXNCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuYmFkZ2UpXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxzcGFuIHJlZj0nYmFkZ2UnPjxjb250ZW50PjwvY29udGVudD48L3NwYW4+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIEJhZGdlRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIG5ldzogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBiYWRnZTogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmJhZGdlLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5uZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWRnZS5jbGFzc0xpc3QuYWRkKFwibmV3XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5iYWRnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmFkZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0NoYW5nZWQoKSB7XHJcbiAgICAgICAgKHRoaXMubmV3KSA/IHRoaXMuYmFkZ2UuY2xhc3NMaXN0LmFkZChcIm5ld1wiKSA6IHRoaXMuYmFkZ2UuY2xhc3NMaXN0LnJlbW92ZShcIm5ld1wiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
