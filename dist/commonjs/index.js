"use strict";
require("@eriklieben/materialize-css");
var materialConfig = require("./config");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFFckMsSUFBWSxjQUFjLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFM0M7SUFBQTtRQUNXLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUV0QixvQkFBZSxHQUErRCxTQUFTLENBQUM7UUFDeEYsa0JBQWEsR0FBK0QsU0FBUyxDQUFDO1FBRXRGLGtCQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSw2QkFBcUIsd0JBUWpDLENBQUE7QUFFRCxtQkFBMEIsTUFBOEIsRUFBRSxPQUE4QjtJQUVwRixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsY0FBYyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRTlDLElBQUksVUFBVSxHQUFHO1FBQ2IsK0NBQStDO1FBQy9DLG1EQUFtRDtRQUNuRCxxREFBcUQ7UUFFckQseUNBQXlDO1FBQ3pDLGdEQUFnRDtRQUVoRCxtQ0FBbUM7UUFFbkMsMkNBQTJDO1FBRTNDLHVDQUF1QztRQUV2QywyQ0FBMkM7S0FDOUMsQ0FBQztJQUVGLElBQUksUUFBUSxHQUFHO1FBQ1gsNkNBQTZDO1FBQzdDLGlEQUFpRDtRQUNqRCxtREFBbUQ7UUFDbkQsaURBQWlEO1FBRWpELHVDQUF1QztRQUN2Qyw4Q0FBOEM7UUFDOUMsMkNBQTJDO1FBRTNDLGlDQUFpQztRQUNqQyxrQ0FBa0M7UUFFbEMseUNBQXlDO1FBQ3pDLGtDQUFrQztRQUNsQyx3Q0FBd0M7UUFFeEMscUNBQXFDO1FBRXJDLHlDQUF5QztLQUM1QyxDQUFDO0lBR0YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN4QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUdELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0FBQ0wsQ0FBQztBQTdEZSxpQkFBUyxZQTZEeEIsQ0FBQTtBQUVEO2tCQUFlLHFCQUFxQixDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGVyaWtsaWViZW4vbWF0ZXJpYWxpemUtY3NzXCI7XHJcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgbWF0ZXJpYWxDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxpemVDc3NPcHRpb25zIHtcclxuICAgIHB1YmxpYyBlbmFibGVBdHRyaWJ1dGVzID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBlbmFibGVFbGVtZW50cyA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGF0dHJpYnV0ZUZpbHRlcjogKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuICAgIHB1YmxpYyBlbGVtZW50RmlsdGVyOiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IG1hdGVyaWFsQ29uZmlnLkNvbmZpZ3VyYXRpb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIG9wdGlvbnM6IE1hdGVyaWFsaXplQ3NzT3B0aW9ucykge1xyXG5cclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBNYXRlcmlhbGl6ZUNzc09wdGlvbnMoKSwgb3B0aW9ucyk7XHJcbiAgICBtYXRlcmlhbENvbmZpZy5jb25maWcgPSBvcHRpb25zLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUhlYWRlckF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRGl2aWRlckF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9ib3hlZEF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxUcmlnZ2VyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3B1c2hwaW4vcHVzaHBpbkF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9zY3JvbGxzcHkvc2Nyb2xsc3B5QXR0cmlidXRlXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBlbGVtZW50cyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkRpdmlkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25JdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9zbGlkZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9zbGlkZXJFbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbENvbnRlbnRFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbEZvb3RlckVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9zY3JvbGxzcHkvc2Nyb2xsc3B5RWxlbWVudFwiLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IGF0dHJpYnV0ZXMgYW5kIGVsZW1lbnRzXHJcbiAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpIHtcclxuICAgICAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcy5maWx0ZXIob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVsZW1lbnRGaWx0ZXIpIHtcclxuICAgICAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihvcHRpb25zLmVsZW1lbnRGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgbG9hZCBhdHRyaWJ1dGVzICYgZWxlbWVudHMgaWYgdGhleSBhcmUgZW5hYmxlZFxyXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlQXR0cmlidXRlcykge1xyXG4gICAgICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoYXR0cmlidXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlRWxlbWVudHMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGVsZW1lbnRzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxpemVDc3NPcHRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
