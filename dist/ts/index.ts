import "eriklieben/materialize";
import { FrameworkConfiguration } from "aurelia-framework";
import * as materialConfig from "./config";

export class MaterializeCssOptions {
    public enableAttributes = true;
    public enableElements = true;

    public attributeFilter: (value: string, index: number, array: string[]) => boolean = undefined;
    public elementFilter: (value: string, index: number, array: string[]) => boolean = undefined;

    public configuration = new materialConfig.Configuration();
}

export function configure(config: FrameworkConfiguration, options: MaterializeCssOptions) {

    options = Object.assign(new MaterializeCssOptions(), options);
    materialConfig.config = options.configuration;

    let attributes = [
        "./javascript/collapsible/collapsibleAttribute",
        "./javascript/collapsible/collapsibleBodyAttribute",
        "./javascript/collapsible/collapsibleHeaderAttribute",
    ];

    let elements = [
        "./javascript/collapsible/collapsibleElement",
        "./javascript/collapsible/collapsibleBodyElement",
        "./javascript/collapsible/collapsibleHeaderElement",
        "./javascript/collapsible/collapsibleItemElement",
    ];

    // Filter out attributes and elements
    if (options.attributeFilter) {
        attributes = attributes.filter(options.attributeFilter);
    }

    if (options.elementFilter) {
        elements = elements.filter(options.elementFilter);
    }

    // Only load attributes & elements if they are enabled
    if (options.enableAttributes) {
        config.globalResources(attributes);
    }

    if (options.enableElements) {
        config.globalResources(elements);
    }
}

export default MaterializeCssOptions;