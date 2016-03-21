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
                    this.scrollSpy = (this.prefix + "scrollspy").trim();
                    this.materialSelect = (this.prefix + "select").trim();
                    this.pickadate = (this.prefix + "pickadate").trim();
                }
                return Configuration;
            }());
            exports_1("Configuration", Configuration);
            exports_1("config", config = new Configuration());
            exports_1("default",config);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUJBOEJXLE1BQU07Ozs7WUE5QmpCO2dCQUFBO29CQUVXLFdBQU0sR0FBRyxJQUFJLENBQUM7b0JBRWQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGlCQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pELG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUQsc0JBQWlCLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSx3QkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUUxRCxhQUFRLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxjQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzNDLG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXBELFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQyxXQUFNLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXZDLFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckMsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BELGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwRCxnQkFBVyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sa0JBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFbEQsWUFBTyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sYUFBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUV6QyxjQUFTLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxlQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRTdDLG1CQUFjLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQy9DLGNBQVMsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGVBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEQsQ0FBQztnQkFBRCxvQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQseUNBNEJDLENBQUE7WUFFVSxvQkFBQSxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQSxDQUFDO1lBQ3hDLG9CQUFlLE1BQU0sRUFBQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcblxyXG4gICAgcHVibGljIHByZWZpeCA9IFwibTpcIjtcclxuXHJcbiAgICBwdWJsaWMgY29sbGFwc2libGUgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZWAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlQm9keSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWJvZHlgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUhlYWRlciA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWhlYWRlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlSXRlbSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWl0ZW1gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgZHJvcGRvd24gPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bmAudHJpbSgpO1xyXG4gICAgcHVibGljIGRyb3Bkb3duRGl2aWRlciA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duLWRpdmlkZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBkcm9wZG93bkl0ZW0gPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bi1pdGVtYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGJveGVkID0gYCR7dGhpcy5wcmVmaXh9Ym94ZWRgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBzbGlkZSA9IGAke3RoaXMucHJlZml4fXNsaWRlYC50cmltKCk7XHJcbiAgICBwdWJsaWMgc2xpZGVyID0gYCR7dGhpcy5wcmVmaXh9c2xpZGVyYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIG1vZGFsID0gYCR7dGhpcy5wcmVmaXh9bW9kYWxgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbFRyaWdnZXIgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC10cmlnZ2VyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxDb250ZW50ID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtY29udGVudGAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsRm9vdGVyID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtZm9vdGVyYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIHB1c2hwaW4gPSBgJHt0aGlzLnByZWZpeH1wdXNocGluYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIHNjcm9sbFNweSA9IGAke3RoaXMucHJlZml4fXNjcm9sbHNweWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBtYXRlcmlhbFNlbGVjdCA9IGAke3RoaXMucHJlZml4fXNlbGVjdGAudHJpbSgpO1xyXG4gICAgcHVibGljIHBpY2thZGF0ZSA9IGAke3RoaXMucHJlZml4fXBpY2thZGF0ZWAudHJpbSgpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIGNvbmZpZyA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
