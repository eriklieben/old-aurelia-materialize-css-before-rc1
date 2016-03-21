System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Configuration, config;
    return {
        setters:[],
        execute: function() {
            Configuration = (function () {
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
            exports_1("Configuration", Configuration);
            exports_1("config", config = new Configuration());
            exports_1("default",config);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUJBeUJXLE1BQU07Ozs7WUF6QmpCO2dCQUFBO29CQUVXLFdBQU0sR0FBRyxJQUFJLENBQUM7b0JBRWQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGlCQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pELG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUQsc0JBQWlCLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSx3QkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUUxRCxhQUFRLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxjQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzNDLG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXBELFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQyxXQUFNLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXZDLFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckMsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BELGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwRCxnQkFBVyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sa0JBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFbEQsWUFBTyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sYUFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwRCxDQUFDO2dCQUFELG9CQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCx5Q0F1QkMsQ0FBQTtZQUVVLG9CQUFBLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFBLENBQUM7WUFDeEMsb0JBQWUsTUFBTSxFQUFDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBwdWJsaWMgcHJlZml4ID0gXCJtOlwiO1xyXG5cclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlYC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVCb2R5ID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtYm9keWAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlSGVhZGVyID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtaGVhZGVyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVJdGVtID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGUtaXRlbWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBkcm9wZG93biA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duYC50cmltKCk7XHJcbiAgICBwdWJsaWMgZHJvcGRvd25EaXZpZGVyID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd24tZGl2aWRlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIGRyb3Bkb3duSXRlbSA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duLWl0ZW1gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgYm94ZWQgPSBgJHt0aGlzLnByZWZpeH1ib3hlZGAudHJpbSgpO1xyXG4gICAgcHVibGljIHNsaWRlID0gYCR7dGhpcy5wcmVmaXh9c2xpZGVgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBzbGlkZXIgPSBgJHt0aGlzLnByZWZpeH1zbGlkZXJgLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgbW9kYWwgPSBgJHt0aGlzLnByZWZpeH1tb2RhbGAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsVHJpZ2dlciA9IGAke3RoaXMucHJlZml4fW1vZGFsLXRyaWdnZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbENvbnRlbnQgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC1jb250ZW50YC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxGb290ZXIgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC1mb290ZXJgLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgcHVzaHBpbiA9IGAke3RoaXMucHJlZml4fXB1c2hwaW5gLnRyaW0oKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBjb25maWcgPSBuZXcgQ29uZmlndXJhdGlvbigpO1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
