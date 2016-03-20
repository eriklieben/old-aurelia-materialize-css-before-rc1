import { DropdownElement } from "./../../../../src/javascript/dropdown/dropdownElement";
import { config } from "./../../../../src/config";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS DropdownElement", () => {
    let sut, templatingEngine, container, defaultOptions;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(DropdownElement);
        sut.id = "someId";
        defaultOptions = {
            alignment: "left",
            belowOrigin: false,
            constrain_width: true,
            gutter: 0,
            hover: false,
            inDuration: 300,
            outDuration: 225,
        };
    });

    it("must throw the exception 'id is a required attribute for the element m:dropdown.' if id is undefined", () => {

        // arrange
        sut.id = undefined;

        // act & assert
        expect(() => sut.attached()).toThrowError(`id is a required attribute for the element ${config.dropdown}.`);
    });

    it("must throw the exception 'id is a required attribute for the element m:dropdown.' if id is string empty", () => {

        // arrange
        sut.id = "";

        // act & assert
        expect(() => sut.attached()).toThrowError(`id is a required attribute for the element ${config.dropdown}.`);
    });

    it("must throw the exception 'id is a required attribute for the element m:dropdown.' if id is string with whitespace", () => {

        // arrange
        sut.id = " ";

        // act & assert
        expect(() => sut.attached()).toThrowError(`id is a required attribute for the element ${config.dropdown}.`);
    });

    it("must perform the dropdown jQuery method on the given element", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalled();
    });

    it("must perform the dropdown jQuery method on the given element with the default options by default", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the dropdown method with a custom in-duration set", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.inDuration = defaultOptions.inDuration = 1500;
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the dropdown method with a custom out-duration set", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.outDuration = defaultOptions.outDuration = 1500;
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the dropdown method with a custom constrain-width set", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.constrainWidth = defaultOptions.constrain_width = false;
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the dropdown method with a custom hover set", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.hover = defaultOptions.hover = true;
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the dropdown method with a custom gutter set", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.gutter = defaultOptions.gutter = 1500;
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the dropdown method with a custom below-origin set", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.belowOrigin = defaultOptions.belowOrigin = true;
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions);
    });

    it("must call the dropdown method with a custom alignment set", () => {

        // arrange
        spyOn($.fn, "dropdown");

        // act
        sut.alignment = defaultOptions.alignment = "right";
        sut.attached();

        // assert
        expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions);
    });
});
