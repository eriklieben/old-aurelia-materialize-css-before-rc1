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
    }
    return Configuration;
}());
exports.Configuration = Configuration;
exports.config = new Configuration();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.config;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUVXLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxnQkFBVyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0saUJBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUQsc0JBQWlCLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSx3QkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxvQkFBZSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFMUQsYUFBUSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sY0FBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNDLG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxpQkFBWSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sbUJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwRCxVQUFLLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxXQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFlBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2QyxVQUFLLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxXQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGtCQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxxQkFBYSxnQkFxQnpCLENBQUE7QUFFVSxjQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUN4QztrQkFBZSxjQUFNLENBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIHB1YmxpYyBwcmVmaXggPSBcIm06XCI7XHJcblxyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGVgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUJvZHkgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1ib2R5YC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVIZWFkZXIgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1oZWFkZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUl0ZW0gPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1pdGVtYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGRyb3Bkb3duID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd25gLnRyaW0oKTtcclxuICAgIHB1YmxpYyBkcm9wZG93bkRpdmlkZXIgPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bi1kaXZpZGVyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgZHJvcGRvd25JdGVtID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd24taXRlbWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBib3hlZCA9IGAke3RoaXMucHJlZml4fWJveGVkYC50cmltKCk7XHJcbiAgICBwdWJsaWMgc2xpZGUgPSBgJHt0aGlzLnByZWZpeH1zbGlkZWAudHJpbSgpO1xyXG4gICAgcHVibGljIHNsaWRlciA9IGAke3RoaXMucHJlZml4fXNsaWRlcmAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBtb2RhbCA9IGAke3RoaXMucHJlZml4fW1vZGFsYC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxUcmlnZ2VyID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtdHJpZ2dlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsQ29udGVudCA9IGAke3RoaXMucHJlZml4fW1vZGFsLWNvbnRlbnRgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbEZvb3RlciA9IGAke3RoaXMucHJlZml4fW1vZGFsLWZvb3RlcmAudHJpbSgpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIGNvbmZpZyA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
