import { CardPanelAttribute } from "./../../../../src/components/card/cardPanelAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CardPanelAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(CardPanelAttribute);

    });

    it("must add the class 'card-panel' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("card-panel");
    });

    it("must remove the class 'card-panel' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("card-panel");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("card-panel");
    });
});
