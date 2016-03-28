import { CollapsibleElement } from "./../../../../src/javascript/collapsible/collapsibleElement";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CollapsibleElement", () => {
    let sut: CollapsibleElement, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        templatingEngine = container.get(TemplatingEngine);

        sut = <CollapsibleElement>templatingEngine.createViewModelForUnitTest(CollapsibleElement);
        sut.element = <HTMLUListElement> DOM.createElement("ul");

    });

    it("must add the class 'collapsible' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("collapsible");
    });

    it("must remove the class 'collapsible' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("collapsible");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("collapsible");
    });

    it("must add the attribute 'data-collapsible' to the given element on attached with the type set", () => {

        // arrange
        sut.type = "expandable";

        // act
        sut.attached();

        // assert
        expect(sut.element.getAttribute("data-collapsible")).toBe("expandable");
    });

    it("must remove the attribute 'data-collapsible' to the given element on detached", () => {

        // arrange
        sut.element.setAttribute("data-collapsible", this.type);

        // act
        sut.detached();

        // assert
        expect(sut.element.hasAttribute("data-collapsible")).toBeFalsy();
    });

    it("must perform the collapsible jQuery method on the given element", () => {

        // arrange
        spyOn($.fn, "collapsible");

        // act
        sut.attached();

        // assert
        expect($.fn.collapsible).toHaveBeenCalled();
    });

    it("must add the classes given in the class property to the given element on attached", () => {

        // arrange
        sut.class = "foo bar";

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("foo");
        expect(sut.element.classList).toContain("bar");
    });
});
