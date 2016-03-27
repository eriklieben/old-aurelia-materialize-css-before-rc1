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
var BreadcrumbAttribute = (function () {
    function BreadcrumbAttribute(element) {
        this.element = element;
    }
    BreadcrumbAttribute.prototype.attached = function () {
        this.element.classList.add("breadcrumb");
    };
    BreadcrumbAttribute.prototype.detached = function () {
        this.element.classList.remove("breadcrumb");
    };
    BreadcrumbAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.breadcrumb),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [HTMLElement])
    ], BreadcrumbAttribute);
    return BreadcrumbAttribute;
}());
exports.BreadcrumbAttribute = BreadcrumbAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYkF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFDcEQsNkNBQXVCLDhCQUE4QixDQUFDLENBQUE7QUFDdEQsdUJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFJeEM7SUFFSSw2QkFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7SUFFcEMsc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBWkw7UUFBQyxtQ0FBZSxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUM7UUFDbEMscUNBQU0sQ0FBQyxPQUFPLENBQUM7OzJCQUFBO0lBWWhCLDBCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSwyQkFBbUIsc0JBVy9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1iQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcuYnJlYWRjcnVtYilcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkF0dHJpYnV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7fVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJyZWFkY3J1bWJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYnJlYWRjcnVtYlwiKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
