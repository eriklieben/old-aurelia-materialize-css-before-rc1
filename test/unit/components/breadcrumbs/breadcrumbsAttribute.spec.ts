import { BreadcrumbsAttribute } from "./../../../../src/components/breadcrumbs/breadcrumbsAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS BreadcrumbsAttribute", () => {
    let sut: BreadcrumbsAttribute,
        templatingEngine,
        container,
        first: Element,
        second: Element;

    beforeEach(() => {
        container = new Container();
        let element = DOM.createElement("div");
        first = DOM.createElement("a");
        first.innerHTML = "First";
        first.classList.add("breadcrumb");
        element.appendChild(first);
        second = DOM.createElement("a");
        second.innerHTML = "Second";
        second.classList.add("breadcrumb");
        element.appendChild(second);
        container.registerInstance(Element, element);
        templatingEngine = container.get(TemplatingEngine);

        sut = <BreadcrumbsAttribute>templatingEngine.createViewModelForUnitTest(BreadcrumbsAttribute);

    });

    it("must add the class 'nav-wrapper' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("nav-wrapper");
    });

    it("must remove the class 'nav-wrapper' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("nav-wrapper");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("nav-wrapper");
    });

    it("must add the wrapper column inner child element to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect((<HTMLElement>sut.element.firstChild).tagName).toBe("DIV");
    });

    it("must add the wrapper column inner child element with class 'col' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect((<HTMLElement>sut.element.firstChild).classList).toContain("col");
    });

    it("must add the wrapper column inner child element with class 's12' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect((<HTMLElement>sut.element.firstChild).classList).toContain("s12");
    });

    it("must add the childs inside the wrapper column to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.firstChild.childNodes.length).toBe(2);
    });

    it("must add the childs inside the wrapper column in the correct order to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.firstChild.childNodes[0].textContent).toBe("First");
        expect(sut.element.firstChild.childNodes[1].textContent).toBe("Second");
    });

});
