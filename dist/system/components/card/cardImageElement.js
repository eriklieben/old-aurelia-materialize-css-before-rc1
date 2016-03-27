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
    var CardImageElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CardImageElement = (function () {
                function CardImageElement() {
                }
                CardImageElement.prototype.attached = function () {
                    this.element.classList.add("card-image");
                    this.titleElement.classList.add("card-title");
                    this.imageElement.src = this.imageUrl;
                    this.titleElement.textContent = this.title;
                };
                CardImageElement.prototype.detached = function () {
                    this.element.classList.remove("card-image");
                    this.titleElement.classList.remove("card-title");
                    this.imageElement.removeAttribute("src");
                    this.titleElement.textContent = "";
                };
                __decorate([
                    aurelia_framework_1.bindable(), 
                    __metadata('design:type', String)
                ], CardImageElement.prototype, "imageUrl", void 0);
                __decorate([
                    aurelia_framework_1.bindable(), 
                    __metadata('design:type', String)
                ], CardImageElement.prototype, "title", void 0);
                CardImageElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.cardImage),
                    aurelia_framework_1.inlineView("<template><div ref='element'><img ref='imageElement'></image><span ref='titleElement'></span></div></template>"), 
                    __metadata('design:paramtypes', [])
                ], CardImageElement);
                return CardImageElement;
            }());
            exports_1("CardImageElement", CardImageElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC9jYXJkSW1hZ2VFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBeUJBLENBQUM7Z0JBYlUsbUNBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDL0MsQ0FBQztnQkFFTSxtQ0FBUSxHQUFmO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN2QyxDQUFDO2dCQWxCRDtvQkFBQyw0QkFBUSxFQUFFOztrRUFBQTtnQkFHWDtvQkFBQyw0QkFBUSxFQUFFOzsrREFBQTtnQkFYZjtvQkFBQyxpQ0FBYSxDQUFDLGVBQU0sQ0FBQyxTQUFTLENBQUM7b0JBQy9CLDhCQUFVLENBQUMsZ0hBQWdILENBQUM7O29DQUFBO2dCQTBCN0gsdUJBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELCtDQXlCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FyZC9jYXJkSW1hZ2VFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGlubGluZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChjb25maWcuY2FyZEltYWdlKVxyXG5AaW5saW5lVmlldyhcIjx0ZW1wbGF0ZT48ZGl2IHJlZj0nZWxlbWVudCc+PGltZyByZWY9J2ltYWdlRWxlbWVudCc+PC9pbWFnZT48c3BhbiByZWY9J3RpdGxlRWxlbWVudCc+PC9zcGFuPjwvZGl2PjwvdGVtcGxhdGU+XCIpXHJcbmV4cG9ydCBjbGFzcyBDYXJkSW1hZ2VFbGVtZW50IHtcclxuXHJcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgaW1hZ2VFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHVibGljIHRpdGxlRWxlbWVudDogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIEBiaW5kYWJsZSgpXHJcbiAgICBwdWJsaWMgaW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBAYmluZGFibGUoKVxyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbWFnZVwiKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcclxuICAgICAgICB0aGlzLmltYWdlRWxlbWVudC5zcmMgPSB0aGlzLmltYWdlVXJsO1xyXG4gICAgICAgIHRoaXMudGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkLWltYWdlXCIpO1xyXG4gICAgICAgIHRoaXMudGl0bGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkLXRpdGxlXCIpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
