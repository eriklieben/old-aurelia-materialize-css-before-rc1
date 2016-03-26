import { BadgeElement } from "./../../../../src/components/badge/badgeElement";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS BadgeElement", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        templatingEngine = container.get(TemplatingEngine);
        sut = templatingEngine.createViewModelForUnitTest(BadgeElement);
        sut.badge = DOM.createElement("span");
    });

    it("must add the class 'badge' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.badge.classList).toContain("badge");
    });

    it("must remove the class 'badge' from the given element on detached", () => {

        // arrange
        sut.badge.classList.add("badge");

        // act
        sut.detached();

        // assert
        expect(sut.badge.classList).not.toContain("badge");
    });

    it("must add the class 'new' if new is set to true on the given element", () => {

        // act
        sut.new = true;
        sut.attached();

        // assert
        expect(sut.badge.classList).toContain("new");
    });

    it("must not add the class 'new' if new is set to true on the given element", () => {

        // act
        sut.new = true;
        sut.new = false;
        sut.attached();

        // assert
        expect(sut.badge.classList).not.toContain("new");
    });

});
