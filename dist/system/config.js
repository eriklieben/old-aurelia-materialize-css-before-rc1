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
                    this.badge = (this.prefix + "badge").trim();
                    this.icon = (this.prefix + "icon").trim();
                    this.button = (this.prefix + "button").trim();
                    this.breadcrumb = (this.prefix + "breadcrumb").trim();
                    this.breadcrumbs = (this.prefix + "breadcrumbs").trim();
                    this.materialSelect = (this.prefix + "select").trim();
                    this.pickadate = (this.prefix + "pickadate").trim();
                    this.card = (this.prefix + "card").trim();
                    this.cardTitle = (this.prefix + "card-title").trim();
                    this.cardAction = (this.prefix + "card-action").trim();
                    this.cardImage = (this.prefix + "card-image").trim();
                    this.cardReveal = (this.prefix + "card-reveal").trim();
                    this.cardPanel = (this.prefix + "card-panel").trim();
                    this.allowedWaves = ["light", "red", "yellow", "orange", "purple", "green", "teal"];
                }
                return Configuration;
            }());
            exports_1("Configuration", Configuration);
            exports_1("config", config = new Configuration());
            exports_1("default",config);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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Q0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsZUFBVSxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0saUJBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDaEQsY0FBUyxHQUFHLENBQUcsSUFBSSxDQUFDLE1BQU0sZ0JBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFOUMsaUJBQVksR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRSxDQUFDO2dCQUMzRixDQUFDO2dCQUFELG9CQUFDO1lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtZQTVDRCx5Q0E0Q0MsQ0FBQTtZQStDVSxvQkFBQSxNQUFNLEdBQW1CLElBQUksYUFBYSxFQUFFLENBQUEsQ0FBQztZQUN4RCxvQkFBZSxNQUFNLEVBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24gaW1wbGVtZW50cyBJQ29uZmlndXJhdGlvbiB7XHJcblxyXG4gICAgcHVibGljIHByZWZpeCA9IFwibTpcIjtcclxuXHJcbiAgICBwdWJsaWMgY29sbGFwc2libGUgPSBgJHt0aGlzLnByZWZpeH1jb2xsYXBzaWJsZWAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlQm9keSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWJvZHlgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjb2xsYXBzaWJsZUhlYWRlciA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWhlYWRlcmAudHJpbSgpO1xyXG4gICAgcHVibGljIGNvbGxhcHNpYmxlSXRlbSA9IGAke3RoaXMucHJlZml4fWNvbGxhcHNpYmxlLWl0ZW1gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgZHJvcGRvd24gPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bmAudHJpbSgpO1xyXG4gICAgcHVibGljIGRyb3Bkb3duRGl2aWRlciA9IGAke3RoaXMucHJlZml4fWRyb3Bkb3duLWRpdmlkZXJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBkcm9wZG93bkl0ZW0gPSBgJHt0aGlzLnByZWZpeH1kcm9wZG93bi1pdGVtYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGJveGVkID0gYCR7dGhpcy5wcmVmaXh9Ym94ZWRgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBzbGlkZSA9IGAke3RoaXMucHJlZml4fXNsaWRlYC50cmltKCk7XHJcbiAgICBwdWJsaWMgc2xpZGVyID0gYCR7dGhpcy5wcmVmaXh9c2xpZGVyYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIG1vZGFsID0gYCR7dGhpcy5wcmVmaXh9bW9kYWxgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBtb2RhbFRyaWdnZXIgPSBgJHt0aGlzLnByZWZpeH1tb2RhbC10cmlnZ2VyYC50cmltKCk7XHJcbiAgICBwdWJsaWMgbW9kYWxDb250ZW50ID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtY29udGVudGAudHJpbSgpO1xyXG4gICAgcHVibGljIG1vZGFsRm9vdGVyID0gYCR7dGhpcy5wcmVmaXh9bW9kYWwtZm9vdGVyYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIHB1c2hwaW4gPSBgJHt0aGlzLnByZWZpeH1wdXNocGluYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIHNjcm9sbFNweSA9IGAke3RoaXMucHJlZml4fXNjcm9sbHNweWAudHJpbSgpO1xyXG5cclxuICAgIHB1YmxpYyBiYWRnZSA9IGAke3RoaXMucHJlZml4fWJhZGdlYC50cmltKCk7XHJcbiAgICBwdWJsaWMgaWNvbiA9IGAke3RoaXMucHJlZml4fWljb25gLnRyaW0oKTtcclxuICAgIHB1YmxpYyBidXR0b24gPSBgJHt0aGlzLnByZWZpeH1idXR0b25gLnRyaW0oKTtcclxuXHJcbiAgICBwdWJsaWMgYnJlYWRjcnVtYiA9IGAke3RoaXMucHJlZml4fWJyZWFkY3J1bWJgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBicmVhZGNydW1icyA9IGAke3RoaXMucHJlZml4fWJyZWFkY3J1bWJzYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIG1hdGVyaWFsU2VsZWN0ID0gYCR7dGhpcy5wcmVmaXh9c2VsZWN0YC50cmltKCk7XHJcbiAgICBwdWJsaWMgcGlja2FkYXRlID0gYCR7dGhpcy5wcmVmaXh9cGlja2FkYXRlYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGNhcmQgPSBgJHt0aGlzLnByZWZpeH1jYXJkYC50cmltKCk7XHJcbiAgICBwdWJsaWMgY2FyZFRpdGxlID0gYCR7dGhpcy5wcmVmaXh9Y2FyZC10aXRsZWAudHJpbSgpO1xyXG4gICAgcHVibGljIGNhcmRBY3Rpb24gPSBgJHt0aGlzLnByZWZpeH1jYXJkLWFjdGlvbmAudHJpbSgpO1xyXG4gICAgcHVibGljIGNhcmRJbWFnZSA9IGAke3RoaXMucHJlZml4fWNhcmQtaW1hZ2VgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjYXJkUmV2ZWFsID0gYCR7dGhpcy5wcmVmaXh9Y2FyZC1yZXZlYWxgLnRyaW0oKTtcclxuICAgIHB1YmxpYyBjYXJkUGFuZWwgPSBgJHt0aGlzLnByZWZpeH1jYXJkLXBhbmVsYC50cmltKCk7XHJcblxyXG4gICAgcHVibGljIGFsbG93ZWRXYXZlcyA9IFtcImxpZ2h0XCIsIFwicmVkXCIsIFwieWVsbG93XCIsIFwib3JhbmdlXCIsIFwicHVycGxlXCIsIFwiZ3JlZW5cIiwgXCJ0ZWFsXCIgXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlndXJhdGlvbiB7XHJcbiAgICBwcmVmaXg/OiBzdHJpbmc7XHJcblxyXG4gICAgY29sbGFwc2libGU/OiBzdHJpbmc7XHJcbiAgICBjb2xsYXBzaWJsZUJvZHk/OiBzdHJpbmc7XHJcbiAgICBjb2xsYXBzaWJsZUhlYWRlcj86IHN0cmluZztcclxuICAgIGNvbGxhcHNpYmxlSXRlbT86IHN0cmluZztcclxuXHJcbiAgICBkcm9wZG93bj86IHN0cmluZztcclxuICAgIGRyb3Bkb3duRGl2aWRlcj86IHN0cmluZztcclxuICAgIGRyb3Bkb3duSXRlbT86IHN0cmluZztcclxuXHJcbiAgICBib3hlZD86IHN0cmluZztcclxuICAgIHNsaWRlPzogc3RyaW5nO1xyXG4gICAgc2xpZGVyPzogc3RyaW5nO1xyXG5cclxuICAgIG1vZGFsPzogc3RyaW5nO1xyXG4gICAgbW9kYWxUcmlnZ2VyPzogc3RyaW5nO1xyXG4gICAgbW9kYWxDb250ZW50Pzogc3RyaW5nO1xyXG4gICAgbW9kYWxGb290ZXI/OiBzdHJpbmc7XHJcblxyXG4gICAgcHVzaHBpbj86IHN0cmluZztcclxuXHJcbiAgICBzY3JvbGxTcHk/OiBzdHJpbmc7XHJcblxyXG4gICAgYmFkZ2U/OiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgYnV0dG9uPzogc3RyaW5nO1xyXG5cclxuICAgIGJyZWFkY3J1bWI/OiBzdHJpbmc7XHJcbiAgICBicmVhZGNydW1icz86IHN0cmluZztcclxuXHJcbiAgICBtYXRlcmlhbFNlbGVjdD86IHN0cmluZztcclxuICAgIHBpY2thZGF0ZT86IHN0cmluZztcclxuXHJcbiAgICBjYXJkPzogc3RyaW5nO1xyXG4gICAgY2FyZFRpdGxlPzogc3RyaW5nO1xyXG4gICAgY2FyZEFjdGlvbj86IHN0cmluZztcclxuICAgIGNhcmRJbWFnZT86IHN0cmluZztcclxuICAgIGNhcmRSZXZlYWw/OiBzdHJpbmc7XHJcbiAgICBjYXJkUGFuZWw/OiBzdHJpbmc7XHJcblxyXG4gICAgYWxsb3dlZFdhdmVzPzogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IHZhciBjb25maWc6IElDb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
