System.register(["aurelia-framework", "aurelia-dependency-injection", "../../config"], function(exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_dependency_injection_1, config_1;
    var ScrollSpyElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            ScrollSpyElement = (function () {
                function ScrollSpyElement(element) {
                    this.element = element;
                }
                ScrollSpyElement.prototype.attached = function () {
                    $("*[id]", this.element).scrollSpy();
                };
                ScrollSpyElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.scrollSpy),
                    aurelia_framework_1.inlineView("<template><content></content></template>"),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], ScrollSpyElement);
                return ScrollSpyElement;
            }());
            exports_1("ScrollSpyElement", ScrollSpyElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvc2Nyb2xsc3B5L3Njcm9sbHNweUVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSSwwQkFBb0IsT0FBZ0I7b0JBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7Z0JBQ3BDLENBQUM7Z0JBRU0sbUNBQVEsR0FBZjtvQkFDSSxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztnQkFWTDtvQkFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxTQUFTLENBQUM7b0JBQy9CLDhCQUFVLENBQUMsMENBQTBDLENBQUM7b0JBQ3RELHFDQUFNLENBQUMsT0FBTyxDQUFDOztvQ0FBQTtnQkFTaEIsdUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELCtDQVFDLENBQUEiLCJmaWxlIjoiamF2YXNjcmlwdC9zY3JvbGxzcHkvc2Nyb2xsc3B5RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoY29uZmlnLnNjcm9sbFNweSlcclxuQGlubGluZVZpZXcoXCI8dGVtcGxhdGU+PGNvbnRlbnQ+PC9jb250ZW50PjwvdGVtcGxhdGU+XCIpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweUVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICAkKFwiKltpZF1cIiwgdGhpcy5lbGVtZW50KS5zY3JvbGxTcHkoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
