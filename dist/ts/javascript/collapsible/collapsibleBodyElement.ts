import { customElement, containerless, inlineView, bindable } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.collapsibleBody)
@containerless
@inlineView("<template><div class='collapsible-body ${class}'><content></content></div></template>")
export class CollapsibleBodyElement {
    @bindable
    public class: string;
}
