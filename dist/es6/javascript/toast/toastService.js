export class ToastService {
    show(message, displayLength, className) {
        return new Promise((resolve, reject) => {
            Materialize.toast(message, displayLength, className, () => {
                resolve();
            });
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQvdG9hc3QvdG9hc3RTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ1csSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBVTtRQUMxQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFO2dCQUNqRCxPQUFPLEVBQUUsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0FBQ0wsQ0FBQztBQUFBIiwiZmlsZSI6ImphdmFzY3JpcHQvdG9hc3QvdG9hc3RTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XHJcbiAgICBwdWJsaWMgc2hvdyhtZXNzYWdlLCBkaXNwbGF5TGVuZ3RoLCBjbGFzc05hbWU/KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgTWF0ZXJpYWxpemUudG9hc3QobWVzc2FnZSwgZGlzcGxheUxlbmd0aCwgY2xhc3NOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
