import { CardImageAttribute } from "./../../../../src/components/card/cardImageAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CardImageAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(CardImageAttribute);

    });

    it("must add the class 'card-image' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("card-image");
    });

    it("must remove the class 'card-image' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("card-image");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("card-image");
    });
});
