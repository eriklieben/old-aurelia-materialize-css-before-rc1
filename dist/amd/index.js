define(["require", "exports", "./config", "eriklieben/materialize"], function (require, exports, materialConfig) {
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
        ];
        var elements = [
            "./javascript/collapsible/collapsibleElement",
            "./javascript/collapsible/collapsibleBodyElement",
            "./javascript/collapsible/collapsibleHeaderElement",
            "./javascript/collapsible/collapsibleItemElement",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBSUE7UUFBQTtZQUNXLHFCQUFnQixHQUFHLElBQUksQ0FBQztZQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztZQUV0QixvQkFBZSxHQUErRCxTQUFTLENBQUM7WUFDeEYsa0JBQWEsR0FBK0QsU0FBUyxDQUFDO1lBRXRGLGtCQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUFELDRCQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSw2QkFBcUIsd0JBUWpDLENBQUE7SUFFRCxtQkFBMEIsTUFBOEIsRUFBRSxPQUE4QjtRQUVwRixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQsY0FBYyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRTlDLElBQUksVUFBVSxHQUFHO1lBQ2IsK0NBQStDO1lBQy9DLG1EQUFtRDtZQUNuRCxxREFBcUQ7U0FDeEQsQ0FBQztRQUVGLElBQUksUUFBUSxHQUFHO1lBQ1gsNkNBQTZDO1lBQzdDLGlEQUFpRDtZQUNqRCxtREFBbUQ7WUFDbkQsaURBQWlEO1NBQ3BELENBQUM7UUFHRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBbkNlLGlCQUFTLFlBbUN4QixDQUFBO0lBRUQ7c0JBQWUscUJBQXFCLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJlcmlrbGllYmVuL21hdGVyaWFsaXplXCI7XHJcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgbWF0ZXJpYWxDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxpemVDc3NPcHRpb25zIHtcclxuICAgIHB1YmxpYyBlbmFibGVBdHRyaWJ1dGVzID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBlbmFibGVFbGVtZW50cyA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGF0dHJpYnV0ZUZpbHRlcjogKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBlbGVtZW50RmlsdGVyOiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IG1hdGVyaWFsQ29uZmlnLkNvbmZpZ3VyYXRpb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIG9wdGlvbnM6IE1hdGVyaWFsaXplQ3NzT3B0aW9ucykge1xyXG5cclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBNYXRlcmlhbGl6ZUNzc09wdGlvbnMoKSwgb3B0aW9ucyk7XHJcbiAgICBtYXRlcmlhbENvbmZpZy5jb25maWcgPSBvcHRpb25zLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUhlYWRlckF0dHJpYnV0ZVwiLFxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5RWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSXRlbUVsZW1lbnRcIixcclxuICAgIF07XHJcblxyXG4gICAgLy8gRmlsdGVyIG91dCBhdHRyaWJ1dGVzIGFuZCBlbGVtZW50c1xyXG4gICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKSB7XHJcbiAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuZmlsdGVyKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5lbGVtZW50RmlsdGVyKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5maWx0ZXIob3B0aW9ucy5lbGVtZW50RmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmx5IGxvYWQgYXR0cmlidXRlcyAmIGVsZW1lbnRzIGlmIHRoZXkgYXJlIGVuYWJsZWRcclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGF0dHJpYnV0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhlbGVtZW50cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsaXplQ3NzT3B0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
