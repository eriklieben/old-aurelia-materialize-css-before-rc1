import { bindable, containerless, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.icon)
@containerless()
@inlineView("<template><i ref='element'><content></content></i></template>")
export class IconElement {

    @bindable({ defaultValue: "" })
    public type: string;

    @bindable({ defaultValue: "small" })
    public size: string;

    public element: HTMLElement;

    public attached() {
        this.element.classList.add("material-icons");
        this.element.classList.add(this.size);

        if (this.type !== "") {
            this.element.innerHTML = this.type;
        }
    }

    public detached() {
        this.element.classList.remove("material-icons");
        this.element.classList.remove(this.size);

        if (this.type !== "") {
            this.element.innerHTML = "";
        }
    }
}
