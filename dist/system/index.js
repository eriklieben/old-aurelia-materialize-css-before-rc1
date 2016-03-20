System.register(["eriklieben/materialize", "./config"], function(exports_1, context_1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0lBY0EsbUJBQTBCLE1BQThCLEVBQUUsT0FBOEI7UUFFcEYsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELGNBQWMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUU5QyxJQUFJLFVBQVUsR0FBRztZQUNiLCtDQUErQztZQUMvQyxtREFBbUQ7WUFDbkQscURBQXFEO1lBRXJELHlDQUF5QztZQUN6QyxnREFBZ0Q7U0FFbkQsQ0FBQztRQUVGLElBQUksUUFBUSxHQUFHO1lBQ1gsNkNBQTZDO1lBQzdDLGlEQUFpRDtZQUNqRCxtREFBbUQ7WUFDbkQsaURBQWlEO1lBRWpELHVDQUF1QztZQUN2Qyw4Q0FBOEM7WUFDOUMsMkNBQTJDO1NBQzlDLENBQUM7UUFHRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBM0NELGlDQTJDQyxDQUFBOzs7Ozs7OztZQXJERDtnQkFBQTtvQkFDVyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO29CQUV0QixvQkFBZSxHQUErRCxTQUFTLENBQUM7b0JBQ3hGLGtCQUFhLEdBQStELFNBQVMsQ0FBQztvQkFFdEYsa0JBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDOUQsQ0FBQztnQkFBRCw0QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQseURBUUMsQ0FBQTtZQStDRCxvQkFBZSxxQkFBcUIsRUFBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImVyaWtsaWViZW4vbWF0ZXJpYWxpemVcIjtcclxuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgKiBhcyBtYXRlcmlhbENvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbGl6ZUNzc09wdGlvbnMge1xyXG4gICAgcHVibGljIGVuYWJsZUF0dHJpYnV0ZXMgPSB0cnVlO1xyXG4gICAgcHVibGljIGVuYWJsZUVsZW1lbnRzID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXR0cmlidXRlRmlsdGVyOiAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG4gICAgcHVibGljIGVsZW1lbnRGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgbWF0ZXJpYWxDb25maWcuQ29uZmlndXJhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgb3B0aW9uczogTWF0ZXJpYWxpemVDc3NPcHRpb25zKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IE1hdGVyaWFsaXplQ3NzT3B0aW9ucygpLCBvcHRpb25zKTtcclxuICAgIG1hdGVyaWFsQ29uZmlnLmNvbmZpZyA9IG9wdGlvbnMuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtcclxuICAgICAgICBcIi4vamF2YXNjcmlwdC9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlQm9keUF0dHJpYnV0ZVwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duQXR0cmlidXRlXCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyQXR0cmlidXRlXCIsXHJcblxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVFbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvY29sbGFwc2libGUvY29sbGFwc2libGVCb2R5RWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSGVhZGVyRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlSXRlbUVsZW1lbnRcIixcclxuXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25FbGVtZW50XCIsXHJcbiAgICAgICAgXCIuL2phdmFzY3JpcHQvZHJvcGRvd24vZHJvcGRvd25EaXZpZGVyRWxlbWVudFwiLFxyXG4gICAgICAgIFwiLi9qYXZhc2NyaXB0L2Ryb3Bkb3duL2Ryb3Bkb3duSXRlbUVsZW1lbnRcIixcclxuICAgIF07XHJcblxyXG4gICAgLy8gRmlsdGVyIG91dCBhdHRyaWJ1dGVzIGFuZCBlbGVtZW50c1xyXG4gICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKSB7XHJcbiAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuZmlsdGVyKG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5lbGVtZW50RmlsdGVyKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5maWx0ZXIob3B0aW9ucy5lbGVtZW50RmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmx5IGxvYWQgYXR0cmlidXRlcyAmIGVsZW1lbnRzIGlmIHRoZXkgYXJlIGVuYWJsZWRcclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKGF0dHJpYnV0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmVuYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhlbGVtZW50cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsaXplQ3NzT3B0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
