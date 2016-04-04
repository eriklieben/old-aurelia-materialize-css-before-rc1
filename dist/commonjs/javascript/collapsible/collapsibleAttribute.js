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
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var config_1 = require("./../../config");
var CollapsibleAttribute = (function () {
    function CollapsibleAttribute(element) {
        this.element = element;
    }
    CollapsibleAttribute.prototype.attached = function () {
        var _this = this;
        this.element.classList.add("collapsible");
        this.element.setAttribute("data-collapsible", this.type);
        if (this.class !== undefined && this.class !== null) {
            this.class.split(" ").forEach(function (element) {
                if (element !== '') {
                    _this.element.classList.add(element);
                }
            });
        }
        $(this.element).collapsible();
    };
    CollapsibleAttribute.prototype.detached = function () {
        this.element.removeAttribute("data-collapsible");
        for (var i = 0; i < this.element.classList.length; i++) {
            this.element.classList.remove(this.element.classList[i]);
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultValue: "accordion" }), 
        __metadata('design:type', String)
    ], CollapsibleAttribute.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultValue: "" }), 
        __metadata('design:type', String)
    ], CollapsibleAttribute.prototype, "class", void 0);
    CollapsibleAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.collapsible),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [HTMLUListElement])
    ], CollapsibleAttribute);
    return CollapsibleAttribute;
}());
exports.CollapsibleAttribute = CollapsibleAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGtDQUEwQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzlELDZDQUF1Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RELHVCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBSXhDO0lBUUksOEJBQW9CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQzdDLENBQUM7SUFFTSx1Q0FBUSxHQUFmO1FBQUEsaUJBY0M7UUFaRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sdUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFHakQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0wsQ0FBQztJQWhDRDtRQUFDLDRCQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUM7O3NEQUFBO0lBR3hDO1FBQUMsNEJBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQzs7dURBQUE7SUFQbkM7UUFBQyxtQ0FBZSxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUM7UUFDbkMscUNBQU0sQ0FBQyxPQUFPLENBQUM7OzRCQUFBO0lBb0NoQiwyQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksNEJBQW9CLHVCQW1DaEMsQ0FBQSIsImZpbGUiOiJqYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKGNvbmZpZy5jb2xsYXBzaWJsZSlcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVBdHRyaWJ1dGUge1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRWYWx1ZTogXCJhY2NvcmRpb25cIiB9KVxyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0VmFsdWU6IFwiXCIgfSlcclxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSFRNTFVMaXN0RWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzaWJsZVwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xsYXBzaWJsZVwiLCB0aGlzLnR5cGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFzcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuY2xhc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzcy5zcGxpdChcIiBcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5jb2xsYXBzaWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jb2xsYXBzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgLy8gVGhlcmUgc2hvdWxkIG5vdCBiZSBhbnkgY3NzIGNsYXNzIG9uIHRoZSB1bC5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
