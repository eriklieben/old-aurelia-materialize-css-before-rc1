import { ButtonAttribute } from "./../../../../src/components/button/buttonAttribute";
import { config } from "./../../../../src/config";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS ButtonAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("a"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(ButtonAttribute);

    });

    it("must add the class 'waves-effect' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("waves-effect");
    });

    it("must remove the class 'waves-effect' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("waves-effect");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("waves-effect");
    });

    it("must add the class 'btn-flat' to the given element if flat is set to true on attached", () => {

        // arrange
        sut.flat = true;

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("btn-flat");
    });

    it("must not add the class 'btn' to the given element if flat is set to true on attached", () => {

        // arrange
        sut.flat = true;

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).not.toContain("btn");
    });

    it("must remove the class 'btn-flat' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("btn-flat");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("btn-flat");
    });

    it("must add the class 'btn-floating' to the given element if floating is set to true on attached", () => {

        // arrange
        sut.floating = true;

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("btn-floating");
    });

    it("must not add the class 'btn' to the given element if floating is set to true on attached", () => {

        // arrange
        sut.floating = true;

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).not.toContain("btn");
    });

    it("must remove the class 'btn-floating' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("btn-floating");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("btn-floating");
    });

    it("must add the class 'btn-large' to the given element if large is set to true on attached", () => {

        // arrange
        sut.large = true;

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("btn-large");
    });

    it("must remove the class 'btn-large' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("btn-large");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("btn-large");
    });

    it("must add the class 'waves-light' to the given element if waves is set to 'light' on attached", () => {

        // arrange
        sut.waves = "light";

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("waves-light");
    });

    it("must thow error if waves is set to 'foo' (a not allowed colour) on attached", () => {

        // arrange
        sut.waves = "foo";

        // act & assert
        expect(() => sut.attached())
            .toThrow(new Error(`Waves cannot be 'foo', must be one of the following values ${config.allowedWaves.join(",")}.`));
    });

    it("must add the class 'waves-brown' to the given element if waves is set to 'brown' and allowed in config on attached", () => {

        // arrange
        config.allowedWaves.push("brown");
        sut.waves = "brown";

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("waves-brown");
    });

});
