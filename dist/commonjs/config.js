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
        this.icon = (this.prefix + "icon").trim();
        this.materialSelect = (this.prefix + "select").trim();
        this.pickadate = (this.prefix + "pickadate").trim();
    }
    return Configuration;
}());
exports.Configuration = Configuration;
exports.config = new Configuration();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.config;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUVXLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxnQkFBVyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0saUJBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUQsc0JBQWlCLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSx3QkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFMUQsYUFBUSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sY0FBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNDLG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxpQkFBWSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sbUJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwRCxVQUFLLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxXQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFlBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2QyxVQUFLLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxXQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGtCQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbEQsWUFBTyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sYUFBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLGNBQVMsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGVBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU3QyxVQUFLLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxXQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsU0FBSSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sVUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5DLG1CQUFjLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0MsY0FBUyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sZUFBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFBRCxvQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlkscUJBQWEsZ0JBK0J6QixDQUFBO0FBRVUsY0FBTSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7QUFDeEM7a0JBQWUsY0FBTSxDQUFDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBwdWJsaWMgcHJlZml4ID0gXCJtOlwiO1xyXG5cclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlYC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVCb2R5ID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtYm9keWAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlSGVhZGVyID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtaGVhZGVyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVJdGVtID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtaXRlbWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBkcm9wZG93biA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duYC50cmltKCk7XHJcbiAgICBwdWJsaWMgZHJvcGRvd25EaXZpZGVyID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd24tZGl2aWRlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIGRyb3Bkb3duSXRlbSA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duLWl0ZW1gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgYm94ZWQgPSBgJHt0aGlzLnByZWZpeH1ib3hlZGAudHJpbSgpO1xyXG4gICAgcHVibGljIHNsaWRlID0gYCR7dGhpcy5wcmVmaXh9c2xpZGVgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBzbGlkZXIgPSBgJHt0aGlzLnByZWZpeH1zbGlkZXJgLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgbW9kYWwgPSBgJHt0aGlzLnByZWZpeH1tb2RhbGAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsVHJpZ2dlciA9IGAke3RoaXMucHJlZml4fW1vZGFsLXRyaWdnZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbENvbnRlbnQgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC1jb250ZW50YC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxGb290ZXIgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC1mb290ZXJgLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgcHVzaHBpbiA9IGAke3RoaXMucHJlZml4fXB1c2hwaW5gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgc2Nyb2xsU3B5ID0gYCR7dGhpcy5wcmVmaXh9c2Nyb2xsc3B5YC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGJhZGdlID0gYCR7dGhpcy5wcmVmaXh9YmFkZ2VgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBpY29uID0gYCR7dGhpcy5wcmVmaXh9aWNvbmAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBtYXRlcmlhbFNlbGVjdCA9IGAke3RoaXMucHJlZml4fXNlbGVjdGAudHJpbSgpO1xyXG4gICAgcHVibGljIHBpY2thZGF0ZSA9IGAke3RoaXMucHJlZml4fXBpY2thZGF0ZWAudHJpbSgpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIGNvbmZpZyA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
