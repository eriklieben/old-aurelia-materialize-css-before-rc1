import { CardActionElement } from "./../../../../src/components/card/cardActionElement";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CardActionElement", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(CardActionElement);
        sut.element = DOM.createElement("div");
    });

    it("must add the class 'card-action' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("card-action");
    });

    it("must remove the class 'card-action' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("card-action");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("card-action");
    });
});
