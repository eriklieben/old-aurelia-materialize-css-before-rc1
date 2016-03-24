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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBUUE7UUFBQTtZQUNXLHFCQUFnQixHQUFHLElBQUksQ0FBQztZQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztZQUV0QixvQkFBZSxHQUErRCxTQUFTLENBQUM7WUFDeEYsa0JBQWEsR0FBK0QsU0FBUyxDQUFDO1lBRXRGLGtCQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUFELDRCQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSw2QkFBcUIsd0JBUWpDLENBQUE7SUFFRCxtQkFBMEIsTUFBOEIsRUFBRSxPQUE4QjtRQUVwRixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQsY0FBYyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRTlDLElBQUksVUFBVSxHQUFHO1lBQ2IsK0NBQStDO1lBQy9DLG1EQUFtRDtZQUNuRCxxREFBcUQ7WUFFckQseUNBQXlDO1lBQ3pDLGdEQUFnRDtZQUVoRCxtQ0FBbUM7WUFFbkMsMkNBQTJDO1lBRTNDLHVDQUF1QztZQUV2QywyQ0FBMkM7WUFFM0Msb0NBQW9DO1lBQ3BDLHVDQUF1QztZQUV2QyxtQ0FBbUM7U0FDdEMsQ0FBQztRQUVGLElBQUksUUFBUSxHQUFHO1lBQ1gsNkNBQTZDO1lBQzdDLGlEQUFpRDtZQUNqRCxtREFBbUQ7WUFDbkQsaURBQWlEO1lBRWpELHVDQUF1QztZQUN2Qyw4Q0FBOEM7WUFDOUMsMkNBQTJDO1lBRTNDLGlDQUFpQztZQUNqQyxrQ0FBa0M7WUFFbEMseUNBQXlDO1lBQ3pDLGtDQUFrQztZQUNsQyx3Q0FBd0M7WUFFeEMscUNBQXFDO1lBRXJDLHlDQUF5QztZQUV6QyxpQ0FBaUM7U0FDcEMsQ0FBQztRQUdGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFHRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNMLENBQUM7SUFwRWUsaUJBQVMsWUFvRXhCLENBQUE7SUFFRDtzQkFBZSxxQkFBcUIsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBlcmlrbGllYmVuL21hdGVyaWFsaXplLWNzc1wiO1xyXG5pbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCAqIGFzIG1hdGVyaWFsQ29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuLy8gaW1wb3J0IHtUb2FzdFNlcnZpY2UgYXMgdG9hc3RTZXJ2aWNlfSBmcm9tIFwiLi9qYXZhc2NyaXB0L3RvYXN0L1RvYXN0U2VydmljZVwiO1xyXG4vLyBleHBvcnQgY29uc3QgVG9hc3RTZXJ2aWNlID0gbmV3IHRvYXN0U2VydmljZSgpO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbGl6ZUNzc09wdGlvbnMge1xyXG4gICAgcHVibGljIGVuYWJsZUF0dHJpYnV0ZXMgPSB0cnVlO1xyXG4gICAgcHVibGljIGVuYWJsZUVsZW1lbnRzID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXR0cmlidXRlRmlsdGVyOiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG4gICAgcHVibGljIGVsZW1lbnRGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgbWF0ZXJpYWxDb25maWcuQ29uZmlndXJhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgb3B0aW9uczogTWF0ZXJpYWxpemVDc3NPcHRpb25zKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IE1hdGVyaWFsaXplQ3NzT3B0aW9ucygpLCBvcHRpb25zKTtcclxuICAgIG1hdGVyaWFsQ29uZmlnLmNvbmZpZyA9IG9wdGlvbnMuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQm9keUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21lZGlhL2JveGVkQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbFRyaWdnZXJBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3Njcm9sbHNweS9zY3JvbGxzcHlBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0QXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvZm9ybXMvcGlja2FkYXRlQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2JhZGdlL2JhZGdlQXR0cmlidXRlXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBlbGVtZW50cyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkRpdmlkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25JdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9zbGlkZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9zbGlkZXJFbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbENvbnRlbnRFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbEZvb3RlckVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9zY3JvbGxzcHkvc2Nyb2xsc3B5RWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vY29tcG9uZW50cy9iYWRnZS9iYWRnZUVsZW1lbnRcIixcclxuICAgIF07XHJcblxyXG4gICAgLy8gRmlsdGVyIG91dCBhdHRyaWJ1dGVzIGFuZCBlbGVtZW50c1xyXG4gICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKSB7XHJcbiAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuZmlsdGVyKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5lbGVtZW50RmlsdGVyKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5maWx0ZXIob3B0aW9ucy5lbGVtZW50RmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmx5IGxvYWQgYXR0cmlidXRlcyAmIGVsZW1lbnRzIGlmIHRoZXkgYXJlIGVuYWJsZWRcclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGF0dHJpYnV0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhlbGVtZW50cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsaXplQ3NzT3B0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
