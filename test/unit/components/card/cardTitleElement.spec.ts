import { CardTitleElement } from "./../../../../src/components/card/cardTitleElement";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CardTitleElement", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(CardTitleElement);
        sut.element = DOM.createElement("div");
    });

    it("must add the class 'card-title' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("card-title");
    });

    it("must remove the class 'card-title' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("card-title");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("card-title");
    });
});
