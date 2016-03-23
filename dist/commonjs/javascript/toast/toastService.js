"use strict";
var ToastService = (function () {
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
exports.ToastService = ToastService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvdG9hc3QvdG9hc3RTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQVBVLDJCQUFJLEdBQVgsVUFBWSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVU7UUFDMUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRTtnQkFDakQsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSxvQkFBWSxlQVF4QixDQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvdG9hc3QvdG9hc3RTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XHJcbiAgICBwdWJsaWMgc2hvdyhtZXNzYWdlLCBkaXNwbGF5TGVuZ3RoLCBjbGFzc05hbWU/KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgTWF0ZXJpYWxpemUudG9hc3QobWVzc2FnZSwgZGlzcGxheUxlbmd0aCwgY2xhc3NOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
