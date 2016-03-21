import { PushpinElement } from "./../../../../src/javascript/pushpin/pushpinElement";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS PushpinElement", () => {
    let sut, templatingEngine, container, defaultOptions;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(PushpinElement);

        defaultOptions = {
            bottom: Infinity,
            offset: 0,
            top: 0,
        };
    });

    it("must perform the pushpin jQuery method on the given element", () => {

        // arrange
        spyOn($.fn, "pushpin");

        // act
        sut.attached();

        // assert
        expect($.fn.pushpin).toHaveBeenCalled();
    });

    it("must call the pushpin method with a custom bottom set", () => {

        // arrange
        spyOn($.fn, "pushpin");

        // act
        sut.bottom = defaultOptions.bottom = 1500;
        sut.attached();

        // assert
        expect($.fn.pushpin).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the pushpin method with a custom offset set", () => {

        // arrange
        spyOn($.fn, "pushpin");

        // act
        sut.offset = defaultOptions.offset = 1500;
        sut.attached();

        // assert
        expect($.fn.pushpin).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the pushpin method with a custom top set", () => {

        // arrange
        spyOn($.fn, "pushpin");

        // act
        sut.top = defaultOptions.top = 1500;
        sut.attached();

        // assert
        expect($.fn.pushpin).toHaveBeenCalledWith(defaultOptions);
    });
});
