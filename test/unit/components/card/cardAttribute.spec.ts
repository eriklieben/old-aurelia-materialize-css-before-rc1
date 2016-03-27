import { CardAttribute } from "./../../../../src/components/card/cardAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CardAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(CardAttribute);

    });

    it("must add the class 'card' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("card");
    });

    it("must remove the class 'card' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("card");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("card");
    });

    it("must add the property of size to the given element on attached", () => {

        // arrange
        sut.size = "medium";

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("medium");
    });

    it("must remove the property of size to the given element on detached", () => {

        // arrange
        sut.size = "medium";
        sut.attached();

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("medium");
    });
});
