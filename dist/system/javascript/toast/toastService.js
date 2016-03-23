System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ToastService;
    return {
        setters:[],
        execute: function() {
            ToastService = (function () {
                function ToastService() {
                }
                ToastService.prototype.show = function (message, displayLength, className) {
                    return new Promise(function (resolve, reject) {
                        Materialize.toast(message, displayLength, className, function () {
                            resolve();
                        });
                    });
                };
                return ToastService;
            }());
            exports_1("ToastService", ToastService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvdG9hc3QvdG9hc3RTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFBQTtnQkFRQSxDQUFDO2dCQVBVLDJCQUFJLEdBQVgsVUFBWSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVU7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMvQixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFOzRCQUNqRCxPQUFPLEVBQUUsQ0FBQzt3QkFDZCxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx1Q0FRQyxDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvdG9hc3QvdG9hc3RTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XHJcbiAgICBwdWJsaWMgc2hvdyhtZXNzYWdlLCBkaXNwbGF5TGVuZ3RoLCBjbGFzc05hbWU/KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgTWF0ZXJpYWxpemUudG9hc3QobWVzc2FnZSwgZGlzcGxheUxlbmd0aCwgY2xhc3NOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
