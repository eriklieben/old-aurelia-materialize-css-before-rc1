import {config} from "../../src/config";

describe("the Aurelia Materialize CSS config", () => {

    it("must have a property dropdown with the default value 'm:dropdown'", () => {
        expect(config.dropdown).toBe("m:dropdown");
    });

    it("must have a property dropdownDivider with the default value 'm:dropdown-divider'", () => {
        expect(config.dropdownDivider).toBe("m:dropdown-divider");
    });

    it("must have a property dropdownItem with the default value 'm:dropdown-item'", () => {
        expect(config.dropdownItem).toBe("m:dropdown-item");
    });
});
