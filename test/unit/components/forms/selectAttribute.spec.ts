import { SelectAttribute } from "./../../../../src/components/forms/selectAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS SelectAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(SelectAttribute);

    });

    it("must perform the material_select jQuery method on the given element on attached", () => {

        // arrange
        spyOn($.fn, "material_select");

        // act
        sut.attached();

        // assert
        expect($.fn.material_select).toHaveBeenCalled();
    });

    it("must perform the material_select('destroy') jQuery method on the given element on detached", () => {

        // arrange
        spyOn($.fn, "material_select");

        // act
        sut.detached();

        // assert
        expect($.fn.material_select).toHaveBeenCalledWith("destroy");
    });

});
