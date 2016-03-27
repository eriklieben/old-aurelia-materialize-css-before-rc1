import { CardTitleAttribute } from "./../../../../src/components/card/cardTitleAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CardTitleAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(CardTitleAttribute);

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
