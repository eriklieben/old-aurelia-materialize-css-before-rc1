import { ScrollSpyAttribute } from "./../../../../src/javascript/scrollspy/scrollspyAttribute";
import { Container } from "aurelia-dependency-injection";
import { TemplatingEngine } from "aurelia-templating";
import { DOM } from "aurelia-pal";

import "@eriklieben/materialize-css";

describe("the Aurelia Materialize CSS ScrollSpyAttribute", () => {
    let sut, templatingEngine, container;

    beforeEach(() => {
        container = new Container();
        container.registerInstance(Element, DOM.createElement("div"));
        templatingEngine = container.get(TemplatingEngine);

        sut = templatingEngine.createViewModelForUnitTest(ScrollSpyAttribute);
    });

    it("must perform the pushpin jQuery method on the given element on attached", () => {

        // arrange
        spyOn($.fn, "scrollSpy");

        // act
        sut.attached();

        // assert
        expect($.fn.scrollSpy).toHaveBeenCalled();
    });
});
