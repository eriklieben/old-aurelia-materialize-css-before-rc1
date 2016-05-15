
import { bindable, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.collapsible)
@inject(Element)
export class CollapsibleAttribute {

    @bindable({ defaultValue: "accordion" })
    public type: string;

    @bindable({ defaultValue: "" })
    public class: string;

    constructor(private element: HTMLUListElement) {
    }

    public attached() {

        this.element.classList.add("collapsible");
        this.element.setAttribute("data-collapsible", this.type);

        if (this.class !== undefined && this.class !== null) {
            this.class.split(" ").forEach(element => {
                if (element !== "") {
                    this.element.classList.add(element);
                }
            });
        }

        $(this.element).collapsible();
    }

    public detached() {
        this.element.removeAttribute("data-collapsible");

        // There should not be any css class on the ul.
        for (let i = 0; i < this.element.classList.length; i++) {
            this.element.classList.remove(this.element.classList[i]);
        }
    }
}
