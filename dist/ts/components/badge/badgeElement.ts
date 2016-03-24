import { bindable, bindingMode, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.badge)
@inlineView("<template><span class='badge ${new}'><content></content></span></template>")
export class BadgeElement {

    @bindable({ bindingMode: bindingMode.twoWay, defaultValue: false })
    public new: string;
}
