import { CollapsibleHeaderAttribute } from "../../../../src/javascript/collapsible/collapsibleHeaderAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "eriklieben/materialize";

describe("the Aurelia Materialize CSS CollapsibleHeaderAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);
        sut = templatingEngine.createViewModelForUnitTest(CollapsibleHeaderAttribute);

    });

    it("must add the class 'collapsible-header' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("collapsible-header");
    });

    it("must remove the class 'collapsible-header' from the given element on deattached", () => {

        // arrange
        sut.element.classList.add("collapsible-header");

        // act
        sut.deattached();

        // assert
        expect(sut.element.classList).not.toContain("collapsible-header");
    });

});
