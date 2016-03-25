import { bindable, bindingMode, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.badge)
@inject(Element)
export class BadgeAttribute {

    constructor(private element: Element) {

    }

    @bindable({ bindingMode: bindingMode.oneWay, defaultValue: false })
    public new: boolean;

    public attached() {
        this.element.classList.add("badge");
        if (this.new) {
            this.element.classList.add("new");
        }
    }

    public detached() {
        this.element.classList.remove("badge");
    }

    public newChanged() {
        (this.new) ? this.element.classList.add("new") : this.element.classList.remove("new");
    }

}
