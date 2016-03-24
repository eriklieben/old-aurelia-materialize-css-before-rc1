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
            this.badge = (this.prefix + "badge").trim();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFBO1FBQUE7WUFFVyxXQUFNLEdBQUcsSUFBSSxDQUFDO1lBRWQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGlCQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFELHNCQUFpQixHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sd0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRTFELGFBQVEsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGNBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFcEQsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JDLFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQyxXQUFNLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdkMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JDLGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELGdCQUFXLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxrQkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWxELFlBQU8sR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGFBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV6QyxjQUFTLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxlQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFN0MsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXJDLG1CQUFjLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0MsY0FBUyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sZUFBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hELENBQUM7UUFBRCxvQkFBQztJQUFELENBOUJBLEFBOEJDLElBQUE7SUE5QlkscUJBQWEsZ0JBOEJ6QixDQUFBO0lBRVUsY0FBTSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUFDeEM7c0JBQWUsY0FBTSxDQUFDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBwdWJsaWMgcHJlZml4ID0gXCJtOlwiO1xyXG5cclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlYC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVCb2R5ID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtYm9keWAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlSGVhZGVyID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtaGVhZGVyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVJdGVtID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtaXRlbWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBkcm9wZG93biA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duYC50cmltKCk7XHJcbiAgICBwdWJsaWMgZHJvcGRvd25EaXZpZGVyID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd24tZGl2aWRlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIGRyb3Bkb3duSXRlbSA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duLWl0ZW1gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgYm94ZWQgPSBgJHt0aGlzLnByZWZpeH1ib3hlZGAudHJpbSgpO1xyXG4gICAgcHVibGljIHNsaWRlID0gYCR7dGhpcy5wcmVmaXh9c2xpZGVgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBzbGlkZXIgPSBgJHt0aGlzLnByZWZpeH1zbGlkZXJgLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgbW9kYWwgPSBgJHt0aGlzLnByZWZpeH1tb2RhbGAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsVHJpZ2dlciA9IGAke3RoaXMucHJlZml4fW1vZGFsLXRyaWdnZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbENvbnRlbnQgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC1jb250ZW50YC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxGb290ZXIgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC1mb290ZXJgLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgcHVzaHBpbiA9IGAke3RoaXMucHJlZml4fXB1c2hwaW5gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgc2Nyb2xsU3B5ID0gYCR7dGhpcy5wcmVmaXh9c2Nyb2xsc3B5YC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGJhZGdlID0gYCR7dGhpcy5wcmVmaXh9YmFkZ2VgLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgbWF0ZXJpYWxTZWxlY3QgPSBgJHt0aGlzLnByZWZpeH1zZWxlY3RgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBwaWNrYWRhdGUgPSBgJHt0aGlzLnByZWZpeH1waWNrYWRhdGVgLnRyaW0oKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBjb25maWcgPSBuZXcgQ29uZmlndXJhdGlvbigpO1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
