export class Configuration {

    public prefix = "m:";

    public collapsible = `${this.prefix}collapsible`.trim();
    public collapsibleBody = `${this.prefix}collapsible-body`.trim();
    public collapsibleHeader = `${this.prefix}collapsible-header`.trim();
    public collapsibleItem = `${this.prefix}collapsible-item`.trim();
}

export var config = new Configuration();
export default config;
