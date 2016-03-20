import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.dropdownItem)
@containerless
@inlineView("<template><li><content></content></li></template>")
export class DropdownItemElement {

}
