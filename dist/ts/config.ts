export class Configuration {

    public prefix = "m:";

    public collapsible = `${this.prefix}collapsible`.trim();
    public collapsibleBody = `${this.prefix}collapsible-body`.trim();
    public collapsibleHeader = `${this.prefix}collapsible-header`.trim();
    public collapsibleItem = `${this.prefix}collapsible-item`.trim();

    public dropdown = `${this.prefix}dropdown`.trim();
    public dropdownDivider = `${this.prefix}dropdown-divider`.trim();
    public dropdownItem = `${this.prefix}dropdown-item`.trim();
}

export var config = new Configuration();
export default config;
