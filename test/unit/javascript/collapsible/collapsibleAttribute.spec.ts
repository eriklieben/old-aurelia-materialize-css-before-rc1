import { CollapsibleAttribute } from "../../../../src/javascript/collapsible/collapsibleAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "eriklieben/materialize";

describe("the Aurelia Materialize CSS CollapsibleAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(CollapsibleAttribute);

    });

    it("must perform the collapsible jQuery method on the given element", () => {

        // arrange
        spyOn($.fn, "collapsible");

        // act
        sut.attached();

        // assert
        expect($.fn.collapsible).toHaveBeenCalled();
    });

});
