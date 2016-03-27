define(["require", "exports", "./config", "@eriklieben/materialize-css"], function (require, exports, materialConfig) {
    "use strict";
    var MaterializeCssOptions = (function () {
        function MaterializeCssOptions() {
            this.enableAttributes = true;
            this.enableElements = true;
            this.attributeFilter = undefined;
            this.elementFilter = undefined;
            this.configuration = new materialConfig.Configuration();
        }
        return MaterializeCssOptions;
    }());
    exports.MaterializeCssOptions = MaterializeCssOptions;
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
    exports.configure = configure;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MaterializeCssOptions;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBT0E7UUFBQTtZQUNXLHFCQUFnQixHQUFHLElBQUksQ0FBQztZQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztZQUV0QixvQkFBZSxHQUErRCxTQUFTLENBQUM7WUFDeEYsa0JBQWEsR0FBK0QsU0FBUyxDQUFDO1lBRXRGLGtCQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUFELDRCQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSw2QkFBcUIsd0JBUWpDLENBQUE7SUFFRCxtQkFBMEIsTUFBOEIsRUFBRSxPQUE4QjtRQUVwRixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQsY0FBYyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRTlDLElBQUksVUFBVSxHQUFHO1lBQ2IsK0NBQStDO1lBQy9DLG1EQUFtRDtZQUNuRCxxREFBcUQ7WUFFckQseUNBQXlDO1lBQ3pDLGdEQUFnRDtZQUVoRCxtQ0FBbUM7WUFFbkMsMkNBQTJDO1lBRTNDLHVDQUF1QztZQUV2QywyQ0FBMkM7WUFFM0Msb0NBQW9DO1lBQ3BDLHVDQUF1QztZQUV2QyxtQ0FBbUM7WUFDbkMsaUNBQWlDO1NBQ3BDLENBQUM7UUFFRixJQUFJLFFBQVEsR0FBRztZQUNYLDZDQUE2QztZQUM3QyxpREFBaUQ7WUFDakQsbURBQW1EO1lBQ25ELGlEQUFpRDtZQUVqRCx1Q0FBdUM7WUFDdkMsOENBQThDO1lBQzlDLDJDQUEyQztZQUUzQyxpQ0FBaUM7WUFDakMsa0NBQWtDO1lBRWxDLHlDQUF5QztZQUN6QyxrQ0FBa0M7WUFDbEMsd0NBQXdDO1lBRXhDLHFDQUFxQztZQUVyQyx5Q0FBeUM7WUFFekMsaUNBQWlDO1lBQ2pDLCtCQUErQjtTQUNsQyxDQUFDO1FBR0YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUdELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQXRFZSxpQkFBUyxZQXNFeEIsQ0FBQTtJQUVEO3NCQUFlLHFCQUFxQixDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGVyaWtsaWViZW4vbWF0ZXJpYWxpemUtY3NzXCI7XHJcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgbWF0ZXJpYWxDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vLyBpbXBvcnQge1RvYXN0U2VydmljZSBhcyB0b2FzdFNlcnZpY2V9IGZyb20gXCIuL2phdmFzY3JpcHQvdG9hc3QvVG9hc3RTZXJ2aWNlXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBUb2FzdFNlcnZpY2UgPSBuZXcgdG9hc3RTZXJ2aWNlKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxpemVDc3NPcHRpb25zIHtcclxuICAgIHB1YmxpYyBlbmFibGVBdHRyaWJ1dGVzID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBlbmFibGVFbGVtZW50cyA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGF0dHJpYnV0ZUZpbHRlcjogKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBlbGVtZW50RmlsdGVyOiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IG1hdGVyaWFsQ29uZmlnLkNvbmZpZ3VyYXRpb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIG9wdGlvbnM6IE1hdGVyaWFsaXplQ3NzT3B0aW9ucykge1xyXG5cclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBNYXRlcmlhbGl6ZUNzc09wdGlvbnMoKSwgb3B0aW9ucyk7XHJcbiAgICBtYXRlcmlhbENvbmZpZy5jb25maWcgPSBvcHRpb25zLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUhlYWRlckF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRGl2aWRlckF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9ib3hlZEF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxUcmlnZ2VyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3B1c2hwaW4vcHVzaHBpbkF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9zY3JvbGxzcHkvc2Nyb2xsc3B5QXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdEF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2Zvcm1zL3BpY2thZGF0ZUF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vY29tcG9uZW50cy9iYWRnZS9iYWRnZUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2ljb24vaWNvbkF0dHJpYnV0ZVwiLFxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5RWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSXRlbUVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25FbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duSXRlbUVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbWVkaWEvc2xpZGVFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbWVkaWEvc2xpZGVyRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxDb250ZW50RWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbEVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxGb290ZXJFbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3B1c2hwaW4vcHVzaHBpbkVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvc2Nyb2xsc3B5L3Njcm9sbHNweUVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2VFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvaWNvbi9pY29uRWxlbWVudFwiLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IGF0dHJpYnV0ZXMgYW5kIGVsZW1lbnRzXHJcbiAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpIHtcclxuICAgICAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcy5maWx0ZXIob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVsZW1lbnRGaWx0ZXIpIHtcclxuICAgICAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihvcHRpb25zLmVsZW1lbnRGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgbG9hZCBhdHRyaWJ1dGVzICYgZWxlbWVudHMgaWYgdGhleSBhcmUgZW5hYmxlZFxyXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlQXR0cmlidXRlcykge1xyXG4gICAgICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoYXR0cmlidXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlRWxlbWVudHMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGVsZW1lbnRzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxpemVDc3NPcHRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
