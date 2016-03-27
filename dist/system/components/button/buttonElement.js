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
    var ButtonElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            ButtonElement = (function () {
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
            exports_1("ButtonElement", ButtonElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbkVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtvQkFLVyxhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUdqQixTQUFJLEdBQUcsS0FBSyxDQUFDO29CQUdiLGFBQVEsR0FBRyxLQUFLLENBQUM7b0JBR2pCLFVBQUssR0FBRyxLQUFLLENBQUM7Z0JBdUN6QixDQUFDO2dCQWxDVSxnQ0FBUSxHQUFmO29CQUFBLGlCQTRCQztvQkEzQkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUMzQyxDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUMvQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzVDLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDM0MsQ0FBQztvQkFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUVwQixFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxLQUFLLEtBQUksQ0FBQyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQW9CLElBQUksQ0FBQyxLQUFLLCtDQUEwQyxlQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDLENBQUM7d0JBQzlILENBQUM7d0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3RELENBQUM7Z0JBQ0wsQ0FBQztnQkFFTSxnQ0FBUSxHQUFmO29CQUFBLGlCQUdDO29CQUZHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUMxRyxlQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsR0FBRyxHQUFHLEVBQWQsQ0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7Z0JBQ3RHLENBQUM7Z0JBaEREO29CQUFDLDRCQUFRLEVBQUU7OytEQUFBO2dCQUdYO29CQUFDLDRCQUFRLEVBQUU7OzJEQUFBO2dCQUdYO29CQUFDLDRCQUFRLEVBQUU7OytEQUFBO2dCQUdYO29CQUFDLDRCQUFRLEVBQUU7OzREQUFBO2dCQUdYO29CQUFDLDRCQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFDLENBQUM7OzREQUFBO2dCQW5CbEM7b0JBQUMsaUNBQWEsQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDO29CQUM1QixpQ0FBYSxFQUFFO29CQUNmLDhCQUFVLENBQUMsK0RBQStELENBQUM7O2lDQUFBO2dCQXNENUUsb0JBQUM7WUFBRCxDQXJEQSxBQXFEQyxJQUFBO1lBckRELHlDQXFEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5saW5lVmlldywgY29udGFpbmVybGVzcyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KGNvbmZpZy5idXR0b24pXHJcbkBjb250YWluZXJsZXNzKClcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGEgcmVmPSdlbGVtZW50Jz48Y29udGVudD48L2NvbnRlbnQ+PC9hPjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25FbGVtZW50IHtcclxuXHJcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQ7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgZmxhdCA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgZmxvYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIGxhcmdlID0gZmFsc2U7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcIlwifSlcclxuICAgIHB1YmxpYyB3YXZlczogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mbGF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuLWZsYXRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZsb2F0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuLWZsb2F0aW5nXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFyZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJidG4tbGFyZ2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3YXZlcy1lZmZlY3RcIik7XHJcbiAgICAgICAgdGhpcy53YXZlcyA9IHRoaXMud2F2ZXMudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLndhdmVzICE9PSBcIlwiKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5hbGxvd2VkV2F2ZXMuc29tZSh2YWwgPT4gdmFsID09PSB0aGlzLndhdmVzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXYXZlcyBjYW5ub3QgYmUgJyR7dGhpcy53YXZlc30nLCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlcyAke2NvbmZpZy5hbGxvd2VkV2F2ZXMuam9pbihcIixcIil9LmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndhdmVzLVwiICsgdGhpcy53YXZlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1mbGF0XCIsIFwiYnRuLWZsb2F0aW5nXCIsIFwiYnRuLWxhcmdlXCIsIFwiYnRuXCIsIFwiZGlzYWJsZWRcIiwgXCJ3YXZlcy1lZmZlY3RcIik7XHJcbiAgICAgICAgY29uZmlnLmFsbG93ZWRXYXZlcy5tYXAodmFsID0+IFwid2F2ZXMtXCIgKyB2YWwpLmZvckVhY2godmFsID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHZhbCkpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
