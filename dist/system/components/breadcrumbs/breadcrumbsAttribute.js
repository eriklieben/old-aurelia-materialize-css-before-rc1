System.register(["aurelia-framework", "aurelia-dependency-injection", "aurelia-pal", "./../../config"], function(exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_dependency_injection_1, aurelia_pal_1, config_1;
    var BreadcrumbsAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            BreadcrumbsAttribute = (function () {
                function BreadcrumbsAttribute(element) {
                    this.element = element;
                }
                BreadcrumbsAttribute.prototype.attached = function () {
                    var colWrapper = aurelia_pal_1.DOM.createElement("div");
                    colWrapper.classList.add("col", "s12");
                    while (this.element.hasChildNodes()) {
                        colWrapper.appendChild(this.element.firstChild);
                    }
                    this.element.appendChild(colWrapper);
                    this.element.classList.add("nav-wrapper");
                };
                BreadcrumbsAttribute.prototype.detached = function () {
                    this.element.classList.remove("nav-wrapper");
                };
                BreadcrumbsAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.breadcrumbs),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [HTMLElement])
                ], BreadcrumbsAttribute);
                return BreadcrumbsAttribute;
            }());
            exports_1("BreadcrumbsAttribute", BreadcrumbsAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnNBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSSw4QkFBbUIsT0FBb0I7b0JBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7Z0JBQUksQ0FBQztnQkFFckMsdUNBQVEsR0FBZjtvQkFFSSxJQUFJLFVBQVUsR0FBRyxpQkFBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUV2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQzt3QkFDbEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRCxDQUFDO29CQUVELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRU0sdUNBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBckJMO29CQUFDLG1DQUFlLENBQUMsZUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDbkMscUNBQU0sQ0FBQyxPQUFPLENBQUM7O3dDQUFBO2dCQXFCaEIsMkJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHVEQW9CQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnNBdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcImF1cmVsaWEtcGFsXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShjb25maWcuYnJlYWRjcnVtYnMpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzQXR0cmlidXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogSFRNTEVsZW1lbnQpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdyYXBwZXIgPSBET00uY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2xXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJzMTJcIik7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGNvbFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbFdyYXBwZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LXdyYXBwZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXdyYXBwZXJcIik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
