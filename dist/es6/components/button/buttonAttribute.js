var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";
export let ButtonAttribute = class ButtonAttribute {
    constructor(element) {
        this.element = element;
        this.disabled = false;
        this.flat = false;
        this.floating = false;
        this.large = false;
    }
    attached() {
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
            if (!config.allowedWaves.some(val => val === this.waves)) {
                throw new Error(`Waves cannot be '${this.waves}', must be one of the following values ${config.allowedWaves.join(",")}.`);
            }
            this.element.classList.add("waves-" + this.waves);
        }
    }
    detached() {
        this.element.classList.remove("btn-flat", "btn-floating", "btn-large", "btn", "disabled", "waves-effect");
        config.allowedWaves.map(val => "waves-" + val).forEach(val => this.element.classList.remove(val));
    }
};
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], ButtonAttribute.prototype, "disabled", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], ButtonAttribute.prototype, "flat", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], ButtonAttribute.prototype, "floating", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], ButtonAttribute.prototype, "large", void 0);
__decorate([
    bindable({ defaultValue: "" }), 
    __metadata('design:type', String)
], ButtonAttribute.prototype, "waves", void 0);
ButtonAttribute = __decorate([
    customAttribute(config.button),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], ButtonAttribute);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbkF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUI7T0FDdEQsRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEI7T0FDOUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0I7QUFJdkM7SUFpQkksWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQWQ3QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLFVBQUssR0FBRyxLQUFLLENBQUM7SUFNckIsQ0FBQztJQUVNLFFBQVE7UUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixJQUFJLENBQUMsS0FBSywwQ0FBMEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlILENBQUM7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0wsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMxRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztBQUNMLENBQUM7QUFwREc7SUFBQyxRQUFRLEVBQUU7O2lEQUFBO0FBR1g7SUFBQyxRQUFRLEVBQUU7OzZDQUFBO0FBR1g7SUFBQyxRQUFRLEVBQUU7O2lEQUFBO0FBR1g7SUFBQyxRQUFRLEVBQUU7OzhDQUFBO0FBR1g7SUFBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFDLENBQUM7OzhDQUFBO0FBaEJsQztJQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUM7O21CQUFBO0FBdURmIiwiZmlsZSI6ImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbkF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5idXR0b24pXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkF0dHJpYnV0ZSB7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgZmxhdCA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgZmxvYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIGxhcmdlID0gZmFsc2U7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdFZhbHVlOiBcIlwifSlcclxuICAgIHB1YmxpYyB3YXZlczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mbGF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuLWZsYXRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZsb2F0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuLWZsb2F0aW5nXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFyZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJidG4tbGFyZ2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3YXZlcy1lZmZlY3RcIik7XHJcbiAgICAgICAgdGhpcy53YXZlcyA9IHRoaXMud2F2ZXMudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLndhdmVzICE9PSBcIlwiKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5hbGxvd2VkV2F2ZXMuc29tZSh2YWwgPT4gdmFsID09PSB0aGlzLndhdmVzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXYXZlcyBjYW5ub3QgYmUgJyR7dGhpcy53YXZlc30nLCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlcyAke2NvbmZpZy5hbGxvd2VkV2F2ZXMuam9pbihcIixcIil9LmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndhdmVzLVwiICsgdGhpcy53YXZlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1mbGF0XCIsIFwiYnRuLWZsb2F0aW5nXCIsIFwiYnRuLWxhcmdlXCIsIFwiYnRuXCIsIFwiZGlzYWJsZWRcIiwgXCJ3YXZlcy1lZmZlY3RcIik7XHJcbiAgICAgICAgY29uZmlnLmFsbG93ZWRXYXZlcy5tYXAodmFsID0+IFwid2F2ZXMtXCIgKyB2YWwpLmZvckVhY2godmFsID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHZhbCkpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
