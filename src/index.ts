import 'eriklieben/materialize';
import { FrameworkConfiguration } from 'aurelia-framework';
import * as materialConfig from './config';

export class MaterializeCssOptions {
    enableAttributes = true;
    enableElements = true;

    attributeFilter: (value: string, index: number, array: string[]) => boolean = undefined;
    elementFilter: (value: string, index: number, array: string[]) => boolean = undefined;

    configuration = new materialConfig.configuration();
}

export function configure(config: FrameworkConfiguration, options: MaterializeCssOptions) {

    options = Object.assign(new MaterializeCssOptions(), options);
    materialConfig.config = options.configuration;

    let attributes = [
    ];

    let elements = [
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
