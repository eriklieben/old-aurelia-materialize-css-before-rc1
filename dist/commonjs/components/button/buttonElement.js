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
var ButtonElement = (function () {
    function ButtonElement() {
        this.disabled = false;
        this.flat = false;
        this.floating = false;
        this.large = false;
    }
    ButtonElement.prototype.attached = function () {
        var _this = this;
        if (this.flat) {
            this.element.classList.add("btn-flat");
        }
        else if (this.floating) {
            this.element.classList.add("btn-floating");
        }
        else {
            this.element.classList.add("btn");
        }
        if (this.large) {
            this.element.classList.add("btn-large");
        }
        if (this.disabled) {
            this.element.classList.add("disabled");
        }
        this.element.classList.add("waves-effect");
        this.waves = this.waves.trim().toLowerCase();
        if (this.waves !== "") {
            if (!config_1.config.allowedWaves.some(function (val) { return val === _this.waves; })) {
                throw new Error("Waves cannot be '" + this.waves + "', must be one of the following values " + config_1.config.allowedWaves.join(",") + ".");
            }
            this.element.classList.add("waves-" + this.waves);
        }
    };
    ButtonElement.prototype.detached = function () {
        var _this = this;
        this.element.classList.remove("btn-flat", "btn-floating", "btn-large", "btn", "disabled", "waves-effect");
        config_1.config.allowedWaves.map(function (val) { return "waves-" + val; }).forEach(function (val) { return _this.element.classList.remove(val); });
    };
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], ButtonElement.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], ButtonElement.prototype, "flat", void 0);
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], ButtonElement.prototype, "floating", void 0);
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', Object)
    ], ButtonElement.prototype, "large", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultValue: "" }), 
        __metadata('design:type', String)
    ], ButtonElement.prototype, "waves", void 0);
    ButtonElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.button),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.inlineView("<template><a ref='element'><content></content></a></template>"), 
        __metadata('design:paramtypes', [])
    ], ButtonElement);
    return ButtonElement;
}());
exports.ButtonElement = ButtonElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbkVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtDQUFtRSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3ZGLHVCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBS3hDO0lBQUE7UUFLVyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLFVBQUssR0FBRyxLQUFLLENBQUM7SUF1Q3pCLENBQUM7SUFsQ1UsZ0NBQVEsR0FBZjtRQUFBLGlCQTRCQztRQTNCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssS0FBSSxDQUFDLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBb0IsSUFBSSxDQUFDLEtBQUssK0NBQTBDLGVBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUMsQ0FBQztZQUM5SCxDQUFDO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMxRyxlQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsR0FBRyxHQUFHLEVBQWQsQ0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQWhERDtRQUFDLDRCQUFRLEVBQUU7O21EQUFBO0lBR1g7UUFBQyw0QkFBUSxFQUFFOzsrQ0FBQTtJQUdYO1FBQUMsNEJBQVEsRUFBRTs7bURBQUE7SUFHWDtRQUFDLDRCQUFRLEVBQUU7O2dEQUFBO0lBR1g7UUFBQyw0QkFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBQyxDQUFDOztnREFBQTtJQW5CbEM7UUFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsaUNBQWEsRUFBRTtRQUNmLDhCQUFVLENBQUMsK0RBQStELENBQUM7O3FCQUFBO0lBc0Q1RSxvQkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFyRFkscUJBQWEsZ0JBcUR6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5saW5lVmlldywgY29udGFpbmVybGVzcyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5idXR0b24pXHJcbkBjb250YWluZXJsZXNzKClcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGEgcmVmPSdlbGVtZW50Jz48Y29udGVudD48L2NvbnRlbnQ+PC9hPjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25FbGVtZW50IHtcclxuXHJcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQ7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgZmxhdCA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgZmxvYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIGxhcmdlID0gZmFsc2U7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcIlwifSlcclxuICAgIHB1YmxpYyB3YXZlczogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mbGF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuLWZsYXRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZsb2F0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuLWZsb2F0aW5nXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFyZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJidG4tbGFyZ2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3YXZlcy1lZmZlY3RcIik7XHJcbiAgICAgICAgdGhpcy53YXZlcyA9IHRoaXMud2F2ZXMudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLndhdmVzICE9PSBcIlwiKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5hbGxvd2VkV2F2ZXMuc29tZSh2YWwgPT4gdmFsID09PSB0aGlzLndhdmVzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXYXZlcyBjYW5ub3QgYmUgJyR7dGhpcy53YXZlc30nLCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlcyAke2NvbmZpZy5hbGxvd2VkV2F2ZXMuam9pbihcIixcIil9LmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndhdmVzLVwiICsgdGhpcy53YXZlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1mbGF0XCIsIFwiYnRuLWZsb2F0aW5nXCIsIFwiYnRuLWxhcmdlXCIsIFwiYnRuXCIsIFwiZGlzYWJsZWRcIiwgXCJ3YXZlcy1lZmZlY3RcIik7XHJcbiAgICAgICAgY29uZmlnLmFsbG93ZWRXYXZlcy5tYXAodmFsID0+IFwid2F2ZXMtXCIgKyB2YWwpLmZvckVhY2godmFsID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHZhbCkpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
