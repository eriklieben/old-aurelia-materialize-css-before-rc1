export class ToastService {
    public show(message, displayLength, className?) {
        return new Promise((resolve, reject) => {
            Materialize.toast(message, displayLength, className, () => {
                resolve();
            });
        });
    }
}
