import { ModalTrigger } from "./../../../../src/javascript/modals/modalTriggerAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS ModalElement", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(ModalTrigger);
    });

    it("must perform the openModal jQuery method on the given element if click function is called", () => {

        // arrange
        spyOn($.fn, "openModal");

        // act
        sut.click();

        // assert
        expect($.fn.openModal).toHaveBeenCalled();
    });

    it("must change value property when valueChanged method is called", () => {

        // arrange
        sut.value = "val";

        // act
        sut.valueChanged("new val");

        // assert
        expect(sut.value).toBe("new val");
    });

    it("must add the 'click' event listener to the element on attached", () => {

        // arrange
        spyOn(sut.element, "addEventListener");

        // act
        sut.attached();

        // assert
        expect(sut.element.addEventListener)
            .toHaveBeenCalledWith("click", jasmine.any(Function));
    });

    it("must remove the 'click' event listener to the element on detached", () => {

        // arrange
        spyOn(sut.element, "removeEventListener");

        // act
        sut.detached();

        // assert
        expect(sut.element.removeEventListener)
            .toHaveBeenCalledWith("click", sut.click);
    });

});

