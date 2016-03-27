import { bindable, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.icon)
@inject(Element)
export class IconAttribute {

    constructor(private element: Element) {

    }

    @bindable({ defaultValue: "" })
    public type: string;

    @bindable({ defaultValue: "small" })
    public size: string;

    public attached() {
        this.element.classList.add("material-icons");
        this.element.classList.add(this.size);
        this.element.innerHTML = this.type;
    }

    public detached() {
        this.element.classList.remove("material-icons");
        this.element.classList.remove(this.size);
        this.element.innerHTML = "";
    }
}
