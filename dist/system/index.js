System.register(["@eriklieben/materialize-css", "./config", "./javascript/toast/ToastService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var materialConfig, ToastService_1;
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
            exports_1("ToastService", ToastService_1.ToastService);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0lBaUJBLG1CQUEwQixNQUE4QixFQUFFLE9BQThCO1FBRXBGLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUkscUJBQXFCLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxjQUFjLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFOUMsSUFBSSxVQUFVLEdBQUc7WUFDYiwrQ0FBK0M7WUFDL0MsbURBQW1EO1lBQ25ELHFEQUFxRDtZQUVyRCx5Q0FBeUM7WUFDekMsZ0RBQWdEO1lBRWhELG1DQUFtQztZQUVuQywyQ0FBMkM7WUFFM0MsdUNBQXVDO1lBRXZDLDJDQUEyQztZQUUzQyxvQ0FBb0M7WUFDcEMsdUNBQXVDO1NBQzFDLENBQUM7UUFFRixJQUFJLFFBQVEsR0FBRztZQUNYLDZDQUE2QztZQUM3QyxpREFBaUQ7WUFDakQsbURBQW1EO1lBQ25ELGlEQUFpRDtZQUVqRCx1Q0FBdUM7WUFDdkMsOENBQThDO1lBQzlDLDJDQUEyQztZQUUzQyxpQ0FBaUM7WUFDakMsa0NBQWtDO1lBRWxDLHlDQUF5QztZQUN6QyxrQ0FBa0M7WUFDbEMsd0NBQXdDO1lBRXhDLHFDQUFxQztZQUVyQyx5Q0FBeUM7U0FDNUMsQ0FBQztRQUdGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFHRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNMLENBQUM7SUFoRUQsaUNBZ0VDLENBQUE7Ozs7Ozs7Ozs7O1lBNUVPLHNEQUFZO1lBRXBCO2dCQUFBO29CQUNXLHFCQUFnQixHQUFHLElBQUksQ0FBQztvQkFDeEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7b0JBRXRCLG9CQUFlLEdBQStELFNBQVMsQ0FBQztvQkFDeEYsa0JBQWEsR0FBK0QsU0FBUyxDQUFDO29CQUV0RixrQkFBYSxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM5RCxDQUFDO2dCQUFELDRCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx5REFRQyxDQUFBO1lBb0VELG9CQUFlLHFCQUFxQixFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGVyaWtsaWViZW4vbWF0ZXJpYWxpemUtY3NzXCI7XHJcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgbWF0ZXJpYWxDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQge1RvYXN0U2VydmljZX0gZnJvbSBcIi4vamF2YXNjcmlwdC90b2FzdC9Ub2FzdFNlcnZpY2VcIjtcclxuZXhwb3J0IHtUb2FzdFNlcnZpY2V9O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsaXplQ3NzT3B0aW9ucyB7XHJcbiAgICBwdWJsaWMgZW5hYmxlQXR0cmlidXRlcyA9IHRydWU7XHJcbiAgICBwdWJsaWMgZW5hYmxlRWxlbWVudHMgPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgZWxlbWVudEZpbHRlcjogKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBtYXRlcmlhbENvbmZpZy5Db25maWd1cmF0aW9uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBvcHRpb25zOiBNYXRlcmlhbGl6ZUNzc09wdGlvbnMpIHtcclxuXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgTWF0ZXJpYWxpemVDc3NPcHRpb25zKCksIG9wdGlvbnMpO1xyXG4gICAgbWF0ZXJpYWxDb25maWcuY29uZmlnID0gb3B0aW9ucy5jb25maWd1cmF0aW9uO1xyXG5cclxuICAgIGxldCBhdHRyaWJ1dGVzID0gW1xyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5QXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25BdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkRpdmlkZXJBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbWVkaWEvYm94ZWRBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsVHJpZ2dlckF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9wdXNocGluL3B1c2hwaW5BdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvc2Nyb2xsc3B5L3Njcm9sbHNweUF0dHJpYnV0ZVwiLFxyXG5cclxuICAgICAgICBcIi4vY29tcG9uZW50cy9mb3Jtcy9zZWxlY3RBdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vY29tcG9uZW50cy9mb3Jtcy9waWNrYWRhdGVBdHRyaWJ1dGVcIixcclxuICAgIF07XHJcblxyXG4gICAgbGV0IGVsZW1lbnRzID0gW1xyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQm9keUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUhlYWRlckVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUl0ZW1FbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duRGl2aWRlckVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkl0ZW1FbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21lZGlhL3NsaWRlRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L21lZGlhL3NsaWRlckVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsQ29udGVudEVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9tb2RhbHMvbW9kYWxFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvbW9kYWxzL21vZGFsRm9vdGVyRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9wdXNocGluL3B1c2hwaW5FbGVtZW50XCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L3Njcm9sbHNweS9zY3JvbGxzcHlFbGVtZW50XCIsXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIEZpbHRlciBvdXQgYXR0cmlidXRlcyBhbmQgZWxlbWVudHNcclxuICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZUZpbHRlcikge1xyXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzLmZpbHRlcihvcHRpb25zLmF0dHJpYnV0ZUZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZWxlbWVudEZpbHRlcikge1xyXG4gICAgICAgIGVsZW1lbnRzID0gZWxlbWVudHMuZmlsdGVyKG9wdGlvbnMuZWxlbWVudEZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25seSBsb2FkIGF0dHJpYnV0ZXMgJiBlbGVtZW50cyBpZiB0aGV5IGFyZSBlbmFibGVkXHJcbiAgICBpZiAob3B0aW9ucy5lbmFibGVBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhhdHRyaWJ1dGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5lbmFibGVFbGVtZW50cykge1xyXG4gICAgICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoZWxlbWVudHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbGl6ZUNzc09wdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
