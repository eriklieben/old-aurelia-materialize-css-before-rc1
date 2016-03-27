export class Configuration {

    public prefix = "m:";

    public collapsible = `${this.prefix}collapsible`.trim();
    public collapsibleBody = `${this.prefix}collapsible-body`.trim();
    public collapsibleHeader = `${this.prefix}collapsible-header`.trim();
    public collapsibleItem = `${this.prefix}collapsible-item`.trim();

    public dropdown = `${this.prefix}dropdown`.trim();
    public dropdownDivider = `${this.prefix}dropdown-divider`.trim();
    public dropdownItem = `${this.prefix}dropdown-item`.trim();

    public boxed = `${this.prefix}boxed`.trim();
    public slide = `${this.prefix}slide`.trim();
    public slider = `${this.prefix}slider`.trim();

    public modal = `${this.prefix}modal`.trim();
    public modalTrigger = `${this.prefix}modal-trigger`.trim();
    public modalContent = `${this.prefix}modal-content`.trim();
    public modalFooter = `${this.prefix}modal-footer`.trim();

    public pushpin = `${this.prefix}pushpin`.trim();

    public scrollSpy = `${this.prefix}scrollspy`.trim();

    public badge = `${this.prefix}badge`.trim();
    public icon = `${this.prefix}icon`.trim();
    public button = `${this.prefix}button`.trim();

    public materialSelect = `${this.prefix}select`.trim();
    public pickadate = `${this.prefix}pickadate`.trim();

    public allowedWaves = ["light", "red", "yellow", "orange", "purple", "green", "teal" ];
}

export var config = new Configuration();
export default config;
