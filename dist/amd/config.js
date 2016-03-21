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
        }
        return Configuration;
    }());
    exports.Configuration = Configuration;
    exports.config = new Configuration();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports.config;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFBO1FBQUE7WUFFVyxXQUFNLEdBQUcsSUFBSSxDQUFDO1lBRWQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGlCQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFELHNCQUFpQixHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sd0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRTFELGFBQVEsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGNBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFcEQsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JDLFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQyxXQUFNLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdkMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JDLGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELGdCQUFXLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxrQkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWxELFlBQU8sR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGFBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwRCxDQUFDO1FBQUQsb0JBQUM7SUFBRCxDQXZCQSxBQXVCQyxJQUFBO0lBdkJZLHFCQUFhLGdCQXVCekIsQ0FBQTtJQUVVLGNBQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ3hDO3NCQUFlLGNBQU0sQ0FBQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcblxyXG4gICAgcHVibGljIHByZWZpeCA9IFwibTpcIjtcclxuXHJcbiAgICBwdWJsaWMgY29sbGFwc2libGUgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZWAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlQm9keSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWJvZHlgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUhlYWRlciA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWhlYWRlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlSXRlbSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWl0ZW1gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgZHJvcGRvd24gPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bmAudHJpbSgpO1xyXG4gICAgcHVibGljIGRyb3Bkb3duRGl2aWRlciA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duLWRpdmlkZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBkcm9wZG93bkl0ZW0gPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bi1pdGVtYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGJveGVkID0gYCR7dGhpcy5wcmVmaXh9Ym94ZWRgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBzbGlkZSA9IGAke3RoaXMucHJlZml4fXNsaWRlYC50cmltKCk7XHJcbiAgICBwdWJsaWMgc2xpZGVyID0gYCR7dGhpcy5wcmVmaXh9c2xpZGVyYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIG1vZGFsID0gYCR7dGhpcy5wcmVmaXh9bW9kYWxgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbFRyaWdnZXIgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC10cmlnZ2VyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxDb250ZW50ID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtY29udGVudGAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsRm9vdGVyID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtZm9vdGVyYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIHB1c2hwaW4gPSBgJHt0aGlzLnByZWZpeH1wdXNocGluYC50cmltKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgY29uZmlnID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
