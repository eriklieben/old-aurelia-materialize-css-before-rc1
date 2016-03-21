import {config} from "./../../src/config";

describe("the Aurelia Materialize CSS config", () => {

    it("must have a property prefix with the default value 'm:'", () => {
        expect(config.prefix).toBe("m:");
    });

    it("must have a property collapsible with the default value 'm:collapsible'", () => {
        expect(config.collapsible).toBe("m:collapsible");
    });

    it("must have a property collapsibleBody with the default value 'm:collapsible-body'", () => {
        expect(config.collapsibleBody).toBe("m:collapsible-body");
    });

    it("must have a property collapsibleHeader with the default value 'm:collapsible-header'", () => {
        expect(config.collapsibleHeader).toBe("m:collapsible-header");
    });

    it("must have a property collapsibleItem with the default value 'm:collapsible-item'", () => {
        expect(config.collapsibleItem).toBe("m:collapsible-item");
    });

    it("must have a property dropdown with the default value 'm:dropdown'", () => {
        expect(config.dropdown).toBe("m:dropdown");
    });

    it("must have a property dropdownDivider with the default value 'm:dropdown-divider'", () => {
        expect(config.dropdownDivider).toBe("m:dropdown-divider");
    });

    it("must have a property dropdownItem with the default value 'm:dropdown-item'", () => {
        expect(config.dropdownItem).toBe("m:dropdown-item");
    });

    it("must have a property boxed with the default value 'm:boxed'", () => {
        expect(config.boxed).toBe("m:boxed");
    });

    it("must have a property slide with the default value 'm:slide'", () => {
        expect(config.slide).toBe("m:slide");
    });

    it("must have a property slider with the default value 'm:slider'", () => {
        expect(config.slider).toBe("m:slider");
    });

    it("must have a property modal with the default value 'm:modal'", () => {
        expect(config.modal).toBe("m:modal");
    });

    it("must have a property modalTrigger with the default value 'm:modal-trigger'", () => {
        expect(config.modalTrigger).toBe("m:modal-trigger");
    });

    it("must have a property modalContent with the default value 'm:modal-content'", () => {
        expect(config.modalContent).toBe("m:modal-content");
    });

    it("must have a property modalFooter with the default value 'm:modal-footer'", () => {
        expect(config.modalFooter).toBe("m:modal-footer");
    });
});
