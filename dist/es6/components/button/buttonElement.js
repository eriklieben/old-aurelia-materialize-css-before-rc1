var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, inlineView, containerless } from "aurelia-framework";
import { config } from "./../../config";
export let ButtonElement = class ButtonElement {
    constructor() {
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
], ButtonElement.prototype, "disabled", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], ButtonElement.prototype, "flat", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], ButtonElement.prototype, "floating", void 0);
__decorate([
    bindable(), 
    __metadata('design:type', Object)
], ButtonElement.prototype, "large", void 0);
__decorate([
    bindable({ defaultValue: "" }), 
    __metadata('design:type', String)
], ButtonElement.prototype, "waves", void 0);
ButtonElement = __decorate([
    customElement(config.button),
    containerless(),
    inlineView("<template><a ref='element'><content></content></a></template>"), 
    __metadata('design:paramtypes', [])
], ButtonElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbkVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUI7T0FDL0UsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0I7QUFLdkM7SUFBQTtRQUtXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsVUFBSyxHQUFHLEtBQUssQ0FBQztJQXVDekIsQ0FBQztJQWxDVSxRQUFRO1FBQ1gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwQixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLEtBQUssMENBQTBDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5SCxDQUFDO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7QUFDTCxDQUFDO0FBakRHO0lBQUMsUUFBUSxFQUFFOzsrQ0FBQTtBQUdYO0lBQUMsUUFBUSxFQUFFOzsyQ0FBQTtBQUdYO0lBQUMsUUFBUSxFQUFFOzsrQ0FBQTtBQUdYO0lBQUMsUUFBUSxFQUFFOzs0Q0FBQTtBQUdYO0lBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBQyxDQUFDOzs0Q0FBQTtBQW5CbEM7SUFBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QixhQUFhLEVBQUU7SUFDZixVQUFVLENBQUMsK0RBQStELENBQUM7O2lCQUFBO0FBc0QzRSIsImZpbGUiOiJjb21wb25lbnRzL2J1dHRvbi9idXR0b25FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcsIGNvbnRhaW5lcmxlc3MgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuYnV0dG9uKVxyXG5AY29udGFpbmVybGVzcygpXHJcbkBpbmxpbmVWaWV3KFwiPHRlbXBsYXRlPjxhIHJlZj0nZWxlbWVudCc+PGNvbnRlbnQ+PC9jb250ZW50PjwvYT48L3RlbXBsYXRlPlwiKVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uRWxlbWVudCB7XHJcblxyXG4gICAgcHVibGljIGVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIGZsYXQgPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIGZsb2F0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgQGJpbmRhYmxlKClcclxuICAgIHB1YmxpYyBsYXJnZSA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRWYWx1ZTogXCJcIn0pXHJcbiAgICBwdWJsaWMgd2F2ZXM6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmxhdCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJ0bi1mbGF0XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mbG9hdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJ0bi1mbG9hdGluZ1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhcmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuLWxhcmdlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwid2F2ZXMtZWZmZWN0XCIpO1xyXG4gICAgICAgIHRoaXMud2F2ZXMgPSB0aGlzLndhdmVzLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy53YXZlcyAhPT0gXCJcIikge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcuYWxsb3dlZFdhdmVzLnNvbWUodmFsID0+IHZhbCA9PT0gdGhpcy53YXZlcykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgV2F2ZXMgY2Fubm90IGJlICcke3RoaXMud2F2ZXN9JywgbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXMgJHtjb25maWcuYWxsb3dlZFdhdmVzLmpvaW4oXCIsXCIpfS5gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3YXZlcy1cIiArIHRoaXMud2F2ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJidG4tZmxhdFwiLCBcImJ0bi1mbG9hdGluZ1wiLCBcImJ0bi1sYXJnZVwiLCBcImJ0blwiLCBcImRpc2FibGVkXCIsIFwid2F2ZXMtZWZmZWN0XCIpO1xyXG4gICAgICAgIGNvbmZpZy5hbGxvd2VkV2F2ZXMubWFwKHZhbCA9PiBcIndhdmVzLVwiICsgdmFsKS5mb3JFYWNoKHZhbCA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh2YWwpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
