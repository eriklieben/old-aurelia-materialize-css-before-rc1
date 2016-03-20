import { customElement, containerless, bindable } from "aurelia-framework";
import { bindingMode } from "aurelia-binding";
import { config } from "./../../config";

@customElement(config.collapsible)
@containerless
export class CollapsibleElement {

    public collapsible;

    @bindable({ bindingMode: bindingMode.oneTime })
    public id: string;

    @bindable({ bindingMode: bindingMode.oneTime, defaultValue: "accordion" })
    public type: string;

    @bindable({ bindingMode: bindingMode.oneTime, defaultValue: "" })
    public class: string;

    public attached() {
        $(this.collapsible).collapsible();
    }
}
