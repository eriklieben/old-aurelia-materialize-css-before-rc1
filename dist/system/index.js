System.register(["@eriklieben/materialize-css", "./config", "./javascript/toast/ToastService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var materialConfig, ToastService_1;
    var ToastService, MaterializeCssOptions;
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
    exports_1("configure", configure);
    return {
        setters:[
            function (_1) {},
            function (materialConfig_1) {
                materialConfig = materialConfig_1;
            },
            function (ToastService_1_1) {
                ToastService_1 = ToastService_1_1;
            }],
        execute: function() {
            exports_1("ToastService", ToastService = new ToastService_1.ToastService());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFLYSxZQUFZO0lBWXpCLG1CQUEwQixNQUE4QixFQUFFLE9BQThCO1FBRXBGLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUkscUJBQXFCLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxjQUFjLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFOUMsSUFBSSxVQUFVLEdBQUc7WUFDYiwrQ0FBK0M7WUFDL0MsbURBQW1EO1lBQ25ELHFEQUFxRDtZQUVyRCx5Q0FBeUM7WUFDekMsZ0RBQWdEO1lBRWhELG1DQUFtQztZQUVuQywyQ0FBMkM7WUFFM0MsdUNBQXVDO1lBRXZDLDJDQUEyQztZQUUzQyxvQ0FBb0M7WUFDcEMsdUNBQXVDO1lBRXZDLG1DQUFtQztTQUN0QyxDQUFDO1FBRUYsSUFBSSxRQUFRLEdBQUc7WUFDWCw2Q0FBNkM7WUFDN0MsaURBQWlEO1lBQ2pELG1EQUFtRDtZQUNuRCxpREFBaUQ7WUFFakQsdUNBQXVDO1lBQ3ZDLDhDQUE4QztZQUM5QywyQ0FBMkM7WUFFM0MsaUNBQWlDO1lBQ2pDLGtDQUFrQztZQUVsQyx5Q0FBeUM7WUFDekMsa0NBQWtDO1lBQ2xDLHdDQUF3QztZQUV4QyxxQ0FBcUM7WUFFckMseUNBQXlDO1lBRXpDLGlDQUFpQztTQUNwQyxDQUFDO1FBR0YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUdELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQXBFRCxpQ0FvRUMsQ0FBQTs7Ozs7Ozs7Ozs7WUFoRlksMEJBQUEsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFBLENBQUM7WUFFL0M7Z0JBQUE7b0JBQ1cscUJBQWdCLEdBQUcsSUFBSSxDQUFDO29CQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztvQkFFdEIsb0JBQWUsR0FBK0QsU0FBUyxDQUFDO29CQUN4RixrQkFBYSxHQUErRCxTQUFTLENBQUM7b0JBRXRGLGtCQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzlELENBQUM7Z0JBQUQsNEJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHlEQVFDLENBQUE7WUF3RUQsb0JBQWUscUJBQXFCLEVBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAZXJpa2xpZWJlbi9tYXRlcmlhbGl6ZS1jc3NcIjtcclxuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgKiBhcyBtYXRlcmlhbENvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7VG9hc3RTZXJ2aWNlIGFzIHRvYXN0U2VydmljZX0gZnJvbSBcIi4vamF2YXNjcmlwdC90b2FzdC9Ub2FzdFNlcnZpY2VcIjtcclxuZXhwb3J0IGNvbnN0IFRvYXN0U2VydmljZSA9IG5ldyB0b2FzdFNlcnZpY2UoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbGl6ZUNzc09wdGlvbnMge1xyXG4gICAgcHVibGljIGVuYWJsZUF0dHJpYnV0ZXMgPSB0cnVlO1xyXG4gICAgcHVibGljIGVuYWJsZUVsZW1lbnRzID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXR0cmlidXRlRmlsdGVyOiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG4gICAgcHVibGljIGVsZW1lbnRGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgbWF0ZXJpYWxDb25maWcuQ29uZmlndXJhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgb3B0aW9uczogTWF0ZXJpYWxpemVDc3NPcHRpb25zKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IE1hdGVyaWFsaXplQ3NzT3B0aW9ucygpLCBvcHRpb25zKTtcclxuICAgIG1hdGVyaWFsQ29uZmlnLmNvbmZpZyA9IG9wdGlvbnMuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQm9keUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21lZGlhL2JveGVkQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbFRyaWdnZXJBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3Njcm9sbHNweS9zY3JvbGxzcHlBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0QXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2NvbXBvbmVudHMvZm9ybXMvcGlja2FkYXRlQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9jb21wb25lbnRzL2JhZGdlL2JhZGdlQXR0cmlidXRlXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBlbGVtZW50cyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkRpdmlkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25JdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9zbGlkZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tZWRpYS9zbGlkZXJFbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbENvbnRlbnRFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21vZGFscy9tb2RhbEZvb3RlckVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvcHVzaHBpbi9wdXNocGluRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9zY3JvbGxzcHkvc2Nyb2xsc3B5RWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vY29tcG9uZW50cy9iYWRnZS9iYWRnZUVsZW1lbnRcIixcclxuICAgIF07XHJcblxyXG4gICAgLy8gRmlsdGVyIG91dCBhdHRyaWJ1dGVzIGFuZCBlbGVtZW50c1xyXG4gICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKSB7XHJcbiAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuZmlsdGVyKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5lbGVtZW50RmlsdGVyKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5maWx0ZXIob3B0aW9ucy5lbGVtZW50RmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmx5IGxvYWQgYXR0cmlidXRlcyAmIGVsZW1lbnRzIGlmIHRoZXkgYXJlIGVuYWJsZWRcclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGF0dHJpYnV0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhlbGVtZW50cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsaXplQ3NzT3B0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
