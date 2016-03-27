import { BreadcrumbElement } from "./../../../../src/components/breadcrumbs/breadcrumbElement";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS BreadcrumbElement", () => {
    let sut:BreadcrumbElement, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(BreadcrumbElement);
        sut.element = <HTMLAnchorElement> DOM.createElement("a");

    });

    it("must add the class 'breadcrumb' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("breadcrumb");
    });

    it("must remove the class 'breadcrumb' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("breadcrumb");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("breadcrumb");
    });
});
