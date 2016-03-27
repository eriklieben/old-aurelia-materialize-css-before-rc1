import { bindable, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.badge)
@inlineView("<template><span ref='badge'><content></content></span></template>")
export class BadgeElement {

    @bindable({ defaultValue: false })
    public new: string;

    public badge: HTMLSpanElement;

    public attached() {
        this.badge.classList.add("badge");
        if (this.new) {
            this.badge.classList.add("new");
        }
    }

    public detached() {
        this.badge.classList.remove("badge");
    }

    public newChanged() {
        (this.new) ? this.badge.classList.add("new") : this.badge.classList.remove("new");
    }

}
