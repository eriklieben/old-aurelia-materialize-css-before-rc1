import { bindable, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.card)
@inject(Element)
export class CardAttribute {

    constructor(public element: Element) {

    }

    @bindable()
    public size: string;

    public attached() {
        this.element.classList.add("card");
        if (this.size) {
            this.element.classList.add(this.size);
        }
    }

    public detached() {
        this.element.classList.remove("card", "small", "medium", "large");
    }
}
