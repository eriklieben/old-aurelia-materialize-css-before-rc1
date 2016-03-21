import { CollapsibleBodyAttribute } from "./../../../../src/javascript/collapsible/collapsibleBodyAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CollapsibleBodyAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);
        sut = templatingEngine.createViewModelForUnitTest(CollapsibleBodyAttribute);

    });

    it("must add the class 'collapsible-body' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("collapsible-body");
    });

    it("must remove the class 'collapsible-body' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("collapsible-body");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("collapsible-body");
    });

});
