import { BadgeAttribute } from "./../../../../src/components/badge/badgeAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS BadgeAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("span"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(BadgeAttribute);

    });

    it("must add the class 'badge' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("badge");
    });

    it("must remove the class 'badge' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("badge");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("badge");
    });

    it("must add the class 'new' if new is set to true on the given element", () => {

        // act
        sut.new = true;
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("new");
    });

    it("must not add the class 'new' if new is set to true on the given element", () => {

        // act
        sut.new = true;
        sut.new = false;
        sut.attached();

        // assert
        expect(sut.element.classList).not.toContain("new");
    });

});
