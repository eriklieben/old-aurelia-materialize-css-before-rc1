import { SliderElement } from "./../../../../src/javascript/media/sliderElement";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS SliderElement", () => {
    let sut, templatingEngine, container, options;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);
        sut = templatingEngine.createViewModelForUnitTest(SliderElement);

        options = {
            full_width: false,
        };

    });

    it("must perform the slider jQuery method on the given element", () => {

        // arrange
        spyOn($.fn, "slider");
        sut.sliderDiv = DOM.createElement("div");

        // act
        sut.attached();

        // assert
        expect($.fn.slider).toHaveBeenCalled();
    });

    it("must perform the slider jQuery method on the given element with the default options by default", () => {

        // arrange
        spyOn($.fn, "slider");
        sut.sliderDiv = DOM.createElement("div");

        // act
        sut.attached();

        // assert
        expect($.fn.slider).toHaveBeenCalledWith(options);
    });

    it("must call the slider method with custom options if is fullscreen set", () => {

        // arrange
        spyOn($.fn, "slider");
        sut.sliderDiv = DOM.createElement("div");


        // act
        sut.fullscreen = options.full_width = true;
        sut.attached();

        // assert
        expect($.fn.slider).toHaveBeenCalledWith(options);
    });

    it("must add the css class 'fullscreen' if fullscreen is set", () => {

        // arrange
        sut.fullscreen = true;
        sut.sliderDiv = DOM.createElement("div");

        // act
        sut.attached();

        // assert
        expect(sut.sliderDiv.classList).toContain("fullscreen");
    });

    it("must not add the css class 'fullscreen' if fullscreen is not set", () => {

        // arrange
        sut.fullscreen = false;
        sut.sliderDiv = DOM.createElement("div");

        // act
        sut.attached();

        // assert
        expect(sut.sliderDiv.classList).not.toContain("fullscreen");
    });

    it("must remove the css class 'fullscreen' from the slider element on detached", () => {

        // arrange
        sut.sliderDiv = DOM.createElement("div");
        sut.sliderDiv.classList.add("fullscreen");

        // act
        sut.detached();

        // assert
        expect(sut.sliderDiv.classList).not.toContain("fullscreen");
    });

});
