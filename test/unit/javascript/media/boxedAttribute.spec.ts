import { BoxedAttribute } from "./../../../../src/javascript/media/boxedAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS BoxedAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(BoxedAttribute);

    });

    it("must perform the materialbox jQuery method on the given element", () => {

        // arrange
        spyOn($.fn, "materialbox");

        // act
        sut.attached();

        // assert
        expect($.fn.materialbox).toHaveBeenCalled();
    });

    it("must add the class 'materialboxed' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("materialboxed");
    });

    it("must remove the class 'materialboxed' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("materialboxed");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("materialboxed");
    });

});
