
import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "../../config";

@customAttribute(config.collapsible)
@inject(Element)
export class CollapsibleAttribute {

    constructor(private element: Element) {
    }

    public attached() {
        $(this.element).collapsible();
    }
}
