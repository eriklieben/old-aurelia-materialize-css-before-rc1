define(["require", "exports", "./config", "./javascript/toast/ToastService", "@eriklieben/materialize-css"], function (require, exports, materialConfig, ToastService_1) {
    "use strict";
    exports.ToastService = ToastService_1.ToastService;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBS1Esb0JBQVk7SUFFcEI7UUFBQTtZQUNXLHFCQUFnQixHQUFHLElBQUksQ0FBQztZQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztZQUV0QixvQkFBZSxHQUErRCxTQUFTLENBQUM7WUFDeEYsa0JBQWEsR0FBK0QsU0FBUyxDQUFDO1lBRXRGLGtCQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUFELDRCQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSw2QkFBcUIsd0JBUWpDLENBQUE7SUFFRCxtQkFBMEIsTUFBOEIsRUFBRSxPQUE4QjtRQUVwRixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQsY0FBYyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRTlDLElBQUksVUFBVSxHQUFHO1lBQ2IsK0NBQStDO1lBQy9DLG1EQUFtRDtZQUNuRCxxREFBcUQ7WUFFckQseUNBQXlDO1lBQ3pDLGdEQUFnRDtZQUVoRCxtQ0FBbUM7WUFFbkMsMkNBQTJDO1lBRTNDLHVDQUF1QztZQUV2QywyQ0FBMkM7WUFFM0Msb0NBQW9DO1lBQ3BDLHVDQUF1QztTQUMxQyxDQUFDO1FBRUYsSUFBSSxRQUFRLEdBQUc7WUFDWCw2Q0FBNkM7WUFDN0MsaURBQWlEO1lBQ2pELG1EQUFtRDtZQUNuRCxpREFBaUQ7WUFFakQsdUNBQXVDO1lBQ3ZDLDhDQUE4QztZQUM5QywyQ0FBMkM7WUFFM0MsaUNBQWlDO1lBQ2pDLGtDQUFrQztZQUVsQyx5Q0FBeUM7WUFDekMsa0NBQWtDO1lBQ2xDLHdDQUF3QztZQUV4QyxxQ0FBcUM7WUFFckMseUNBQXlDO1NBQzVDLENBQUM7UUFHRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBaEVlLGlCQUFTLFlBZ0V4QixDQUFBO0lBRUQ7c0JBQWUscUJBQXFCLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAZXJpa2xpZWJlbi9tYXRlcmlhbGl6ZS1jc3NcIjtcclxuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgKiBhcyBtYXRlcmlhbENvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7VG9hc3RTZXJ2aWNlfSBmcm9tIFwiLi9qYXZhc2NyaXB0L3RvYXN0L1RvYXN0U2VydmljZVwiO1xyXG5leHBvcnQge1RvYXN0U2VydmljZX07XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxpemVDc3NPcHRpb25zIHtcclxuICAgIHB1YmxpYyBlbmFibGVBdHRyaWJ1dGVzID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBlbmFibGVFbGVtZW50cyA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGF0dHJpYnV0ZUZpbHRlcjogKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBlbGVtZW50RmlsdGVyOiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IG1hdGVyaWFsQ29uZmlnLkNvbmZpZ3VyYXRpb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIG9wdGlvbnM6IE1hdGVyaWFsaXplQ3NzT3B0aW9ucykge1xyXG5cclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBNYXRlcmlhbGl6ZUNzc09wdGlvbnMoKSwgb3B0aW9ucyk7XHJcbiAgICBtYXRlcmlhbENvbmZpZy5jb25maWcgPSBvcHRpb25zLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUhlYWRlckF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRGl2aWRlckF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9ib3hlZEF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxUcmlnZ2VyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3B1c2hwaW4vcHVzaHBpbkF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9zY3JvbGxzcHkvc2Nyb2xsc3B5QXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdEF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2Zvcm1zL3BpY2thZGF0ZUF0dHJpYnV0ZVwiLFxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5RWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSXRlbUVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25FbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duSXRlbUVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbWVkaWEvc2xpZGVFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbWVkaWEvc2xpZGVyRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxDb250ZW50RWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbEVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxGb290ZXJFbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3B1c2hwaW4vcHVzaHBpbkVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvc2Nyb2xsc3B5L3Njcm9sbHNweUVsZW1lbnRcIixcclxuICAgIF07XHJcblxyXG4gICAgLy8gRmlsdGVyIG91dCBhdHRyaWJ1dGVzIGFuZCBlbGVtZW50c1xyXG4gICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKSB7XHJcbiAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuZmlsdGVyKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5lbGVtZW50RmlsdGVyKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5maWx0ZXIob3B0aW9ucy5lbGVtZW50RmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmx5IGxvYWQgYXR0cmlidXRlcyAmIGVsZW1lbnRzIGlmIHRoZXkgYXJlIGVuYWJsZWRcclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGF0dHJpYnV0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhlbGVtZW50cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsaXplQ3NzT3B0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
