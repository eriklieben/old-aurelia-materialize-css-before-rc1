import { IconAttribute } from "./../../../../src/components/icon/iconAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS IconAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("i"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(IconAttribute);

    });

    it("must add the class 'material-icons' to the given element on attached", () => {

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("material-icons");
    });

    it("must remove the class 'material-icons' from the given element on detached", () => {

        // arrange
        sut.element.classList.add("material-icons");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("material-icons");
    });

    it("must add the size property as css class to the given element on attached", () => {

        // arrange
        sut.size = "large";

        // act
        sut.attached();

        // assert
        expect(sut.element.classList).toContain("large");
    });

    it("must remove the size property as css class the given element on detached", () => {

        // arrange
        sut.size = "large";
        sut.element.classList.add("large");

        // act
        sut.detached();

        // assert
        expect(sut.element.classList).not.toContain("large");
    });

    it("must add the type as text inside the html element on attached", () => {

        // arrange
        sut.type = "foo";

        // act
        sut.attached();

        // assert
        expect(sut.element.innerHTML).toBe("foo");
    });

    it("must remove the type as text inside the html element on detached", () => {

        // arrange
        sut.type = sut.element.innerHTML = "foo";

        // act
        sut.detached();

        // assert
        expect(sut.element.innerHTML).toBe("");
    });

});
