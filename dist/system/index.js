System.register(["@eriklieben/materialize-css", "./config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var materialConfig;
    var MaterializeCssOptions;
    function configure(config, options) {
        options = Object.assign(new MaterializeCssOptions(), options);
        materialConfig.config = options.configuration;
        var attributes = [
            "./javascript/collapsible/collapsibleAttribute",
            "./javascript/collapsible/collapsibleBodyAttribute",
            "./javascript/collapsible/collapsibleHeaderAttribute",
            "./javascript/dropdown/dropdownAttribute",
            "./javascript/dropdown/dropdownDividerAttribute",
            "./javascript/media/boxedAttribute",
            "./javascript/modals/modalTriggerAttribute",
            "./javascript/pushpin/pushpinAttribute",
            "./javascript/scrollspy/scrollspyAttribute",
            "./components/forms/selectAttribute",
            "./components/forms/pickadateAttribute",
            "./components/badge/badgeAttribute",
            "./components/icon/iconAttribute",
            "./components/breadcrumbs/breadcrumbAttribute",
            "./components/breadcrumbs/breadcrumbsAttribute",
            "./components/card/cardAttribute",
            "./components/card/cardTitleAttribute",
            "./components/card/cardActionAttribute",
            "./components/card/cardImageAttribute",
            "./components/card/cardRevealAttribute",
            "./components/card/cardPanelAttribute",
        ];
        var elements = [
            "./javascript/collapsible/collapsibleElement",
            "./javascript/collapsible/collapsibleBodyElement",
            "./javascript/collapsible/collapsibleHeaderElement",
            "./javascript/collapsible/collapsibleItemElement",
            "./javascript/dropdown/dropdownElement",
            "./javascript/dropdown/dropdownDividerElement",
            "./javascript/dropdown/dropdownItemElement",
            "./javascript/media/slideElement",
            "./javascript/media/sliderElement",
            "./javascript/modals/modalContentElement",
            "./javascript/modals/modalElement",
            "./javascript/modals/modalFooterElement",
            "./javascript/pushpin/pushpinElement",
            "./javascript/scrollspy/scrollspyElement",
            "./components/badge/badgeElement",
            "./components/icon/iconElement",
            "./components/breadcrumbs/breadcrumbElement",
            "./components/breadcrumbs/breadcrumbsElement",
            "./components/card/cardElement",
            "./components/card/cardTitleElement",
            "./components/card/cardActionElement",
            "./components/card/cardImageElement",
            "./components/card/cardRevealElement",
            "./components/card/cardPanelElement",
        ];
        if (options.attributeFilter) {
            attributes = attributes.filter(options.attributeFilter);
        }
        if (options.elementFilter) {
            elements = elements.filter(options.elementFilter);
        }
        if (options.enableAttributes) {
            config.globalResources(attributes);
        }
        if (options.enableElements) {
            config.globalResources(elements);
        }
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (_1) {},
            function (materialConfig_1) {
                materialConfig = materialConfig_1;
            }],
        execute: function() {
            MaterializeCssOptions = (function () {
                function MaterializeCssOptions() {
                    this.enableAttributes = true;
                    this.enableElements = true;
                    this.attributeFilter = undefined;
                    this.elementFilter = undefined;
                    this.configuration = new materialConfig.Configuration();
                }
                return MaterializeCssOptions;
            }());
            exports_1("MaterializeCssOptions", MaterializeCssOptions);
            exports_1("default",MaterializeCssOptions);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0lBMkJBLG1CQUEwQixNQUE4QixFQUFFLE9BQWdDO1FBRXRGLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUkscUJBQXFCLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxjQUFjLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFOUMsSUFBSSxVQUFVLEdBQUc7WUFDYiwrQ0FBK0M7WUFDL0MsbURBQW1EO1lBQ25ELHFEQUFxRDtZQUVyRCx5Q0FBeUM7WUFDekMsZ0RBQWdEO1lBRWhELG1DQUFtQztZQUVuQywyQ0FBMkM7WUFFM0MsdUNBQXVDO1lBRXZDLDJDQUEyQztZQUUzQyxvQ0FBb0M7WUFDcEMsdUNBQXVDO1lBRXZDLG1DQUFtQztZQUNuQyxpQ0FBaUM7WUFFakMsOENBQThDO1lBQzlDLCtDQUErQztZQUUvQyxpQ0FBaUM7WUFDakMsc0NBQXNDO1lBQ3RDLHVDQUF1QztZQUN2QyxzQ0FBc0M7WUFDdEMsdUNBQXVDO1lBQ3ZDLHNDQUFzQztTQUN6QyxDQUFDO1FBRUYsSUFBSSxRQUFRLEdBQUc7WUFDWCw2Q0FBNkM7WUFDN0MsaURBQWlEO1lBQ2pELG1EQUFtRDtZQUNuRCxpREFBaUQ7WUFFakQsdUNBQXVDO1lBQ3ZDLDhDQUE4QztZQUM5QywyQ0FBMkM7WUFFM0MsaUNBQWlDO1lBQ2pDLGtDQUFrQztZQUVsQyx5Q0FBeUM7WUFDekMsa0NBQWtDO1lBQ2xDLHdDQUF3QztZQUV4QyxxQ0FBcUM7WUFFckMseUNBQXlDO1lBRXpDLGlDQUFpQztZQUNqQywrQkFBK0I7WUFFL0IsNENBQTRDO1lBQzVDLDZDQUE2QztZQUU3QywrQkFBK0I7WUFDL0Isb0NBQW9DO1lBQ3BDLHFDQUFxQztZQUNyQyxvQ0FBb0M7WUFDcEMscUNBQXFDO1lBQ3JDLG9DQUFvQztTQUN2QyxDQUFDO1FBR0YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUdELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQTFGRCxpQ0EwRkMsQ0FBQTs7Ozs7Ozs7WUE5R0Q7Z0JBQUE7b0JBQ1cscUJBQWdCLEdBQUcsSUFBSSxDQUFDO29CQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztvQkFFdEIsb0JBQWUsR0FBK0QsU0FBUyxDQUFDO29CQUN4RixrQkFBYSxHQUErRCxTQUFTLENBQUM7b0JBRXRGLGtCQUFhLEdBQWtDLElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM3RixDQUFDO2dCQUFELDRCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx5REFRQyxDQUFBO1lBd0dELG9CQUFlLHFCQUFxQixFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGVyaWtsaWViZW4vbWF0ZXJpYWxpemUtY3NzXCI7XHJcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgbWF0ZXJpYWxDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vLyBpbXBvcnQge1RvYXN0U2VydmljZSBhcyB0b2FzdFNlcnZpY2V9IGZyb20gXCIuL2phdmFzY3JpcHQvdG9hc3QvVG9hc3RTZXJ2aWNlXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBUb2FzdFNlcnZpY2UgPSBuZXcgdG9hc3RTZXJ2aWNlKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxpemVDc3NPcHRpb25zIGltcGxlbWVudHMgSU1hdGVyaWFsaXplQ3NzT3B0aW9ucyB7XHJcbiAgICBwdWJsaWMgZW5hYmxlQXR0cmlidXRlcyA9IHRydWU7XHJcbiAgICBwdWJsaWMgZW5hYmxlRWxlbWVudHMgPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgZWxlbWVudEZpbHRlcjogKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogbWF0ZXJpYWxDb25maWcuSUNvbmZpZ3VyYXRpb24gPSBuZXcgbWF0ZXJpYWxDb25maWcuQ29uZmlndXJhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXRlcmlhbGl6ZUNzc09wdGlvbnMge1xyXG4gICAgZW5hYmxlQXR0cmlidXRlcz86IGJvb2xlYW47XHJcbiAgICBlbmFibGVFbGVtZW50cz86IGJvb2xlYW47XHJcblxyXG4gICAgYXR0cmlidXRlRmlsdGVyPzogKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYm9vbGVhbjtcclxuICAgIGVsZW1lbnRGaWx0ZXI/OiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuO1xyXG5cclxuICAgIGNvbmZpZ3VyYXRpb24/OiBtYXRlcmlhbENvbmZpZy5JQ29uZmlndXJhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIG9wdGlvbnM/OiBJTWF0ZXJpYWxpemVDc3NPcHRpb25zKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IE1hdGVyaWFsaXplQ3NzT3B0aW9ucygpLCBvcHRpb25zKTtcclxuICAgIG1hdGVyaWFsQ29uZmlnLmNvbmZpZyA9IG9wdGlvbnMuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQm9keUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21lZGlhL2JveGVkQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbFRyaWdnZXJBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3Njcm9sbHNweS9zY3JvbGxzcHlBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0QXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvZm9ybXMvcGlja2FkYXRlQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2JhZGdlL2JhZGdlQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvaWNvbi9pY29uQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1ic0F0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vY29tcG9uZW50cy9jYXJkL2NhcmRBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vY29tcG9uZW50cy9jYXJkL2NhcmRUaXRsZUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2NhcmQvY2FyZEFjdGlvbkF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2NhcmQvY2FyZEltYWdlQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvY2FyZC9jYXJkUmV2ZWFsQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvY2FyZC9jYXJkUGFuZWxBdHRyaWJ1dGVcIixcclxuICAgIF07XHJcblxyXG4gICAgbGV0IGVsZW1lbnRzID0gW1xyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQm9keUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUhlYWRlckVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUl0ZW1FbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRGl2aWRlckVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkl0ZW1FbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21lZGlhL3NsaWRlRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21lZGlhL3NsaWRlckVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsQ29udGVudEVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsRm9vdGVyRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9wdXNocGluL3B1c2hwaW5FbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3Njcm9sbHNweS9zY3JvbGxzcHlFbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2JhZGdlL2JhZGdlRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2ljb24vaWNvbkVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYkVsZW1lbnRcIixcclxuICAgICAgICBcIi4vY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1ic0VsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvY2FyZC9jYXJkRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2NhcmQvY2FyZFRpdGxlRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2NhcmQvY2FyZEFjdGlvbkVsZW1lbnRcIixcclxuICAgICAgICBcIi4vY29tcG9uZW50cy9jYXJkL2NhcmRJbWFnZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vY29tcG9uZW50cy9jYXJkL2NhcmRSZXZlYWxFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvY2FyZC9jYXJkUGFuZWxFbGVtZW50XCIsXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIEZpbHRlciBvdXQgYXR0cmlidXRlcyBhbmQgZWxlbWVudHNcclxuICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZUZpbHRlcikge1xyXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzLmZpbHRlcihvcHRpb25zLmF0dHJpYnV0ZUZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZWxlbWVudEZpbHRlcikge1xyXG4gICAgICAgIGVsZW1lbnRzID0gZWxlbWVudHMuZmlsdGVyKG9wdGlvbnMuZWxlbWVudEZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25seSBsb2FkIGF0dHJpYnV0ZXMgJiBlbGVtZW50cyBpZiB0aGV5IGFyZSBlbmFibGVkXHJcbiAgICBpZiAob3B0aW9ucy5lbmFibGVBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhhdHRyaWJ1dGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5lbmFibGVFbGVtZW50cykge1xyXG4gICAgICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoZWxlbWVudHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbGl6ZUNzc09wdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
