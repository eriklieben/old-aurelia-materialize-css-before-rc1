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
                }
                return Configuration;
            }());
            exports_1("Configuration", Configuration);
            exports_1("config", config = new Configuration());
            exports_1("default",config);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUJBMkJXLE1BQU07Ozs7WUEzQmpCO2dCQUFBO29CQUVXLFdBQU0sR0FBRyxJQUFJLENBQUM7b0JBRWQsZ0JBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLGlCQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pELG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUQsc0JBQWlCLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSx3QkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUQsb0JBQWUsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLHNCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUUxRCxhQUFRLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxjQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzNDLG9CQUFlLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxzQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUQsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXBELFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckMsVUFBSyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sV0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQyxXQUFNLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxZQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXZDLFVBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLFdBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckMsaUJBQVksR0FBRyxDQUFHLElBQUksQ0FBQyxNQUFNLG1CQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BELGlCQUFZLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwRCxnQkFBVyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sa0JBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFbEQsWUFBTyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sYUFBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUV6QyxjQUFTLEdBQUcsQ0FBRyxJQUFJLENBQUMsTUFBTSxlQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hELENBQUM7Z0JBQUQsb0JBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELHlDQXlCQyxDQUFBO1lBRVUsb0JBQUEsTUFBTSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUEsQ0FBQztZQUN4QyxvQkFBZSxNQUFNLEVBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIHB1YmxpYyBwcmVmaXggPSBcIm06XCI7XHJcblxyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlID0gYCR7dGhpcy5wcmVmaXh9Y29sbGFwc2libGVgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUJvZHkgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1ib2R5YC50cmltKCk7XHJcbiAgICBwdWJsaWMgY29sbGFwc2libGVIZWFkZXIgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1oZWFkZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUl0ZW0gPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZS1pdGVtYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGRyb3Bkb3duID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd25gLnRyaW0oKTtcclxuICAgIHB1YmxpYyBkcm9wZG93bkRpdmlkZXIgPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bi1kaXZpZGVyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgZHJvcGRvd25JdGVtID0gYCR7dGhpcy5wcmVmaXh9ZHJvcGRvd24taXRlbWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBib3hlZCA9IGAke3RoaXMucHJlZml4fWJveGVkYC50cmltKCk7XHJcbiAgICBwdWJsaWMgc2xpZGUgPSBgJHt0aGlzLnByZWZpeH1zbGlkZWAudHJpbSgpO1xyXG4gICAgcHVibGljIHNsaWRlciA9IGAke3RoaXMucHJlZml4fXNsaWRlcmAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBtb2RhbCA9IGAke3RoaXMucHJlZml4fW1vZGFsYC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxUcmlnZ2VyID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtdHJpZ2dlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsQ29udGVudCA9IGAke3RoaXMucHJlZml4fW1vZGFsLWNvbnRlbnRgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbEZvb3RlciA9IGAke3RoaXMucHJlZml4fW1vZGFsLWZvb3RlcmAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBwdXNocGluID0gYCR7dGhpcy5wcmVmaXh9cHVzaHBpbmAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBzY3JvbGxTcHkgPSBgJHt0aGlzLnByZWZpeH1zY3JvbGxzcHlgLnRyaW0oKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBjb25maWcgPSBuZXcgQ29uZmlndXJhdGlvbigpO1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
