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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUVXLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxnQkFBVyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0saUJBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUQsc0JBQWlCLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSx3QkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFMUQsYUFBUSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sY0FBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNDLG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxpQkFBWSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sbUJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwRCxVQUFLLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxXQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFlBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2QyxVQUFLLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxXQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGtCQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbEQsWUFBTyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sYUFBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLGNBQVMsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGVBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU3QyxtQkFBYyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sWUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9DLGNBQVMsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGVBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLHFCQUFhLGdCQTRCekIsQ0FBQTtBQUVVLGNBQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3hDO2tCQUFlLGNBQU0sQ0FBQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcblxyXG4gICAgcHVibGljIHByZWZpeCA9IFwibTpcIjtcclxuXHJcbiAgICBwdWJsaWMgY29sbGFwc2libGUgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZWAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlQm9keSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWJvZHlgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUhlYWRlciA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWhlYWRlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlSXRlbSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWl0ZW1gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgZHJvcGRvd24gPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bmAudHJpbSgpO1xyXG4gICAgcHVibGljIGRyb3Bkb3duRGl2aWRlciA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duLWRpdmlkZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBkcm9wZG93bkl0ZW0gPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bi1pdGVtYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGJveGVkID0gYCR7dGhpcy5wcmVmaXh9Ym94ZWRgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBzbGlkZSA9IGAke3RoaXMucHJlZml4fXNsaWRlYC50cmltKCk7XHJcbiAgICBwdWJsaWMgc2xpZGVyID0gYCR7dGhpcy5wcmVmaXh9c2xpZGVyYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIG1vZGFsID0gYCR7dGhpcy5wcmVmaXh9bW9kYWxgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbFRyaWdnZXIgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC10cmlnZ2VyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxDb250ZW50ID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtY29udGVudGAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsRm9vdGVyID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtZm9vdGVyYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIHB1c2hwaW4gPSBgJHt0aGlzLnByZWZpeH1wdXNocGluYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIHNjcm9sbFNweSA9IGAke3RoaXMucHJlZml4fXNjcm9sbHNweWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBtYXRlcmlhbFNlbGVjdCA9IGAke3RoaXMucHJlZml4fXNlbGVjdGAudHJpbSgpO1xyXG4gICAgcHVibGljIHBpY2thZGF0ZSA9IGAke3RoaXMucHJlZml4fXBpY2thZGF0ZWAudHJpbSgpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIGNvbmZpZyA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
