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
        ];
        var elements = [
            "./javascript/collapsible/collapsibleElement",
            "./javascript/collapsible/collapsibleBodyElement",
            "./javascript/collapsible/collapsibleHeaderElement",
            "./javascript/collapsible/collapsibleItemElement",
            "./javascript/dropdown/dropdownElement",
            "./javascript/dropdown/dropdownDividerElement",
            "./javascript/dropdown/dropdownItemElement",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0lBY0EsbUJBQTBCLE1BQThCLEVBQUUsT0FBOEI7UUFFcEYsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELGNBQWMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUU5QyxJQUFJLFVBQVUsR0FBRztZQUNiLCtDQUErQztZQUMvQyxtREFBbUQ7WUFDbkQscURBQXFEO1lBRXJELHlDQUF5QztZQUN6QyxnREFBZ0Q7U0FFbkQsQ0FBQztRQUVGLElBQUksUUFBUSxHQUFHO1lBQ1gsNkNBQTZDO1lBQzdDLGlEQUFpRDtZQUNqRCxtREFBbUQ7WUFDbkQsaURBQWlEO1lBRWpELHVDQUF1QztZQUN2Qyw4Q0FBOEM7WUFDOUMsMkNBQTJDO1NBQzlDLENBQUM7UUFHRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBM0NELGlDQTJDQyxDQUFBOzs7Ozs7OztZQXJERDtnQkFBQTtvQkFDVyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO29CQUV0QixvQkFBZSxHQUErRCxTQUFTLENBQUM7b0JBQ3hGLGtCQUFhLEdBQStELFNBQVMsQ0FBQztvQkFFdEYsa0JBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDOUQsQ0FBQztnQkFBRCw0QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQseURBUUMsQ0FBQTtZQStDRCxvQkFBZSxxQkFBcUIsRUFBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBlcmlrbGllYmVuL21hdGVyaWFsaXplLWNzc1wiO1xyXG5pbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCAqIGFzIG1hdGVyaWFsQ29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsaXplQ3NzT3B0aW9ucyB7XHJcbiAgICBwdWJsaWMgZW5hYmxlQXR0cmlidXRlcyA9IHRydWU7XHJcbiAgICBwdWJsaWMgZW5hYmxlRWxlbWVudHMgPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcbiAgICBwdWJsaWMgZWxlbWVudEZpbHRlcjogKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBtYXRlcmlhbENvbmZpZy5Db25maWd1cmF0aW9uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBvcHRpb25zOiBNYXRlcmlhbGl6ZUNzc09wdGlvbnMpIHtcclxuXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgTWF0ZXJpYWxpemVDc3NPcHRpb25zKCksIG9wdGlvbnMpO1xyXG4gICAgbWF0ZXJpYWxDb25maWcuY29uZmlnID0gb3B0aW9ucy5jb25maWd1cmF0aW9uO1xyXG5cclxuICAgIGxldCBhdHRyaWJ1dGVzID0gW1xyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5QXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJBdHRyaWJ1dGVcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25BdHRyaWJ1dGVcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkRpdmlkZXJBdHRyaWJ1dGVcIixcclxuXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBlbGVtZW50cyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUJvZHlFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVIZWFkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVJdGVtRWxlbWVudFwiLFxyXG5cclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkVsZW1lbnRcIixcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9kcm9wZG93bi9kcm9wZG93bkRpdmlkZXJFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25JdGVtRWxlbWVudFwiLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IGF0dHJpYnV0ZXMgYW5kIGVsZW1lbnRzXHJcbiAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpIHtcclxuICAgICAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcy5maWx0ZXIob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVsZW1lbnRGaWx0ZXIpIHtcclxuICAgICAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihvcHRpb25zLmVsZW1lbnRGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgbG9hZCBhdHRyaWJ1dGVzICYgZWxlbWVudHMgaWYgdGhleSBhcmUgZW5hYmxlZFxyXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlQXR0cmlidXRlcykge1xyXG4gICAgICAgIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoYXR0cmlidXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlRWxlbWVudHMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGVsZW1lbnRzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxpemVDc3NPcHRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
