import { DropdownDividerAttribute } from "../../../../src/javascript/dropdown/dropdownDividerAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "eriklieben/materialize";

describe("the Aurelia Materialize CSS DropdownDividerAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);
        sut = templatingEngine.createViewModelForUnitTest(DropdownDividerAttribute);

    });

    it("must add the class 'divider' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("divider");
    });

    it("must remove the class 'divider' from the given element on deattached", () => {

        // arrange
        sut.element.classList.add("divider");

        // act
        sut.deattached();

        // assert
        expect(sut.element.classList).not.toContain("divider");
    });

});
