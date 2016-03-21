define(["require", "exports"], function (require, exports) {
    "use strict";
    var Configuration = (function () {
        function Configuration() {
            this.prefix = "m:";
            this.collapsible = (this.prefix + "collapsible").trim();
            this.collapsibleBody = (this.prefix + "collapsible-body").trim();
            this.collapsibleHeader = (this.prefix + "collapsible-header").trim();
            this.collapsibleItem = (this.prefix + "collapsible-item").trim();
            this.dropdown = (this.prefix + "dropdown").trim();
            this.dropdownDivider = (this.prefix + "dropdown-divider").trim();
            this.dropdownItem = (this.prefix + "dropdown-item").trim();
            this.boxed = (this.prefix + "boxed").trim();
            this.slide = (this.prefix + "slide").trim();
            this.slider = (this.prefix + "slider").trim();
            this.modal = (this.prefix + "modal").trim();
            this.modalTrigger = (this.prefix + "modal-trigger").trim();
            this.modalContent = (this.prefix + "modal-content").trim();
            this.modalFooter = (this.prefix + "modal-footer").trim();
            this.pushpin = (this.prefix + "pushpin").trim();
            this.scrollSpy = (this.prefix + "scrollspy").trim();
            this.materialSelect = (this.prefix + "select").trim();
            this.pickadate = (this.prefix + "pickadate").trim();
        }
        return Configuration;
    }());
    exports.Configuration = Configuration;
    exports.config = new Configuration();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports.config;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFBO1FBQUE7WUFFVyxXQUFNLEdBQUcsSUFBSSxDQUFDO1lBRWQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGlCQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFELHNCQUFpQixHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sd0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRTFELGFBQVEsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGNBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFcEQsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JDLFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQyxXQUFNLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdkMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JDLGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELGdCQUFXLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxrQkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWxELFlBQU8sR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGFBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV6QyxjQUFTLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxlQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFN0MsbUJBQWMsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFlBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQyxjQUFTLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxlQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEQsQ0FBQztRQUFELG9CQUFDO0lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtJQTVCWSxxQkFBYSxnQkE0QnpCLENBQUE7SUFFVSxjQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUN4QztzQkFBZSxjQUFNLENBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIHB1YmxpYyBwcmVmaXggPSBcIm06XCI7XHJcblxyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGVgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUJvZHkgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1ib2R5YC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVIZWFkZXIgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1oZWFkZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUl0ZW0gPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1pdGVtYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGRyb3Bkb3duID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd25gLnRyaW0oKTtcclxuICAgIHB1YmxpYyBkcm9wZG93bkRpdmlkZXIgPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bi1kaXZpZGVyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgZHJvcGRvd25JdGVtID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd24taXRlbWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBib3hlZCA9IGAke3RoaXMucHJlZml4fWJveGVkYC50cmltKCk7XHJcbiAgICBwdWJsaWMgc2xpZGUgPSBgJHt0aGlzLnByZWZpeH1zbGlkZWAudHJpbSgpO1xyXG4gICAgcHVibGljIHNsaWRlciA9IGAke3RoaXMucHJlZml4fXNsaWRlcmAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBtb2RhbCA9IGAke3RoaXMucHJlZml4fW1vZGFsYC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxUcmlnZ2VyID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtdHJpZ2dlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsQ29udGVudCA9IGAke3RoaXMucHJlZml4fW1vZGFsLWNvbnRlbnRgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbEZvb3RlciA9IGAke3RoaXMucHJlZml4fW1vZGFsLWZvb3RlcmAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBwdXNocGluID0gYCR7dGhpcy5wcmVmaXh9cHVzaHBpbmAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBzY3JvbGxTcHkgPSBgJHt0aGlzLnByZWZpeH1zY3JvbGxzcHlgLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgbWF0ZXJpYWxTZWxlY3QgPSBgJHt0aGlzLnByZWZpeH1zZWxlY3RgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBwaWNrYWRhdGUgPSBgJHt0aGlzLnByZWZpeH1waWNrYWRhdGVgLnRyaW0oKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBjb25maWcgPSBuZXcgQ29uZmlndXJhdGlvbigpO1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
