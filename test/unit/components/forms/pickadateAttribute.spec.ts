import { PickADateAttribute } from "./../../../../src/components/forms/pickadateAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS PickADateAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(PickADateAttribute);

    });

    it("must perform the pickadate(options) jQuery method on the given element on attached", () => {

        // arrange
        spyOn($.fn, "pickadate");

        // act
        sut.attached();

        // assert
        expect($.fn.pickadate).toHaveBeenCalledWith(sut.options);
    });

    it("must perform the pickadate('picker') jQuery method on the given element on attached", () => {

        // arrange
        spyOn($.fn, "pickadate");

        // act
        sut.attached();

        // assert
        expect($.fn.pickadate).toHaveBeenCalledWith("picker");
    });

    it("must perform the pickadate('picker') jQuery method on the given element on detached", () => {

        // arrange
        sut.attached();
        spyOn($.fn, "stop");

        // act
        sut.detached();

        // assert
        expect($.fn.stop).toHaveBeenCalled();
    });

    it("must add the 'focus' event listener to the element on attached", () => {

        // arrange
        spyOn(sut.element, "addEventListener");

        // act
        sut.attached();

        // assert
        expect(sut.element.addEventListener)
            .toHaveBeenCalledWith("focus", jasmine.any(Function));
    });

    it("must remove the 'focus' event listener to the element on detached", () => {

        // arrange
        spyOn(sut.element, "removeEventListener");

        // act
        sut.detached();

        // assert
        expect(sut.element.removeEventListener)
            .toHaveBeenCalledWith("focus", jasmine.any(Function));
    });

    it("must add the class 'datepicker' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("datepicker");
    });

    it("must remove the class 'datepicker' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("datepicker");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("datepicker");
    });

});
