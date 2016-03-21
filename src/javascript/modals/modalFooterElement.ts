import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.modalFooter)
@containerless
@inlineView("<template><div class='modal-footer ${class}'><content></content></div></template>")
export class ModelFooterElement {
    @bindable
    public class: string;
}

