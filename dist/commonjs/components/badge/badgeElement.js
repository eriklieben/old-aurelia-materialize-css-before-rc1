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
var BadgeElement = (function () {
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
exports.BadgeElement = BadgeElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBb0QsbUJBQW1CLENBQUMsQ0FBQTtBQUN4RSx1QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUl4QztJQUFBO0lBc0JBLENBQUM7SUFmVSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFsQkQ7UUFBQyw0QkFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzs2Q0FBQTtJQUp0QztRQUFDLGlDQUFhLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQiw4QkFBVSxDQUFDLG1FQUFtRSxDQUFDOztvQkFBQTtJQXVCaEYsbUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLG9CQUFZLGVBc0J4QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuYmFkZ2UpXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxzcGFuIHJlZj0nYmFkZ2UnPjxjb250ZW50PjwvY29udGVudD48L3NwYW4+PC90ZW1wbGF0ZT5cIilcclxuZXhwb3J0IGNsYXNzIEJhZGdlRWxlbWVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG4gICAgcHVibGljIG5ldzogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBiYWRnZTogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmJhZGdlLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5uZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWRnZS5jbGFzc0xpc3QuYWRkKFwibmV3XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5iYWRnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmFkZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0NoYW5nZWQoKSB7XHJcbiAgICAgICAgKHRoaXMubmV3KSA/IHRoaXMuYmFkZ2UuY2xhc3NMaXN0LmFkZChcIm5ld1wiKSA6IHRoaXMuYmFkZ2UuY2xhc3NMaXN0LnJlbW92ZShcIm5ld1wiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
