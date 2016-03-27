import { CardImageElement } from "./../../../../src/components/card/cardImageElement";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS CardImageElement", () => {
    let sut: CardImageElement, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        templatingEngine = container.get(TemplatingEngine);

        sut = <CardImageElement>templatingEngine.createViewModelForUnitTest(CardImageElement);
        sut.element = <HTMLDivElement>DOM.createElement("div");
        sut.titleElement = <HTMLSpanElement>DOM.createElement("span");
        sut.imageElement = <HTMLImageElement>DOM.createElement("img");
    });

    it("must add the class 'card-image' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("card-image");
    });

    it("must remove the class 'card-image' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("card-image");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("card-image");
    });

    it("must add the class 'card-title' to the title element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.titleElement.classList).toContain("card-title");
    });

    it("must remove the class 'card-title' from the title element on detached", () => {

        // arrange
        sut.titleElement.classList.add("card-title");

        // act
        sut.detached();

        // assert
        expect(sut.titleElement.classList).not.toContain("card-title");
    });

    it("must set the imageUrl on the imageElement on attached", () => {

        // arrange
        let imgUri = sut.imageUrl = "http://some.uri/img.png";

        // act
        sut.attached();

        // assert
        expect(sut.imageElement.src).toBe(imgUri);
    });

    it("must clear the imageUrl on the imageElement on detached", () => {

        // arrange
        sut.imageElement.src = "http://some.uri/img.png";
        sut.attached();

        // act
        sut.detached();

        // assert
        expect(sut.imageElement.src).toBe("");
    });

    it("must set the title on the titleElement on attached", () => {

        // arrange
        let title = sut.title = "some title";

        // act
        sut.attached();

        // assert
        expect(sut.titleElement.textContent).toBe(title);
    });

    it("must clear the title on the titleElement on detached", () => {

        // arrange
        sut.titleElement.textContent = "some title";

        // act
        sut.detached();

        // assert
        expect(sut.titleElement.textContent).toBe("");
    });
});
