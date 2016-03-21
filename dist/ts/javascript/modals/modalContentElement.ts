import { customElement, containerless, inlineView, bindable } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.modalContent)
@containerless
@inlineView("<template><div class='modal-content ${class}'><content></content></div></template>")
export class ModelContentElement {
    @bindable
    public class: string;
}
