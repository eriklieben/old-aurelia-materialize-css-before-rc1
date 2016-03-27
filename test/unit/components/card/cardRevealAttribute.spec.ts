import { CardRevealAttribute } from "./../../../../src/components/card/cardRevealAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CardRevealAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(CardRevealAttribute);

    });

    it("must add the class 'card-reveal' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("card-reveal");
    });

    it("must remove the class 'card-reveal' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("card-reveal");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("card-reveal");
    });
});
