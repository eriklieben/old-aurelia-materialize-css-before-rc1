import { bindable, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.pickadate)
@inject(Element)
export class PickADateAttribute {

    constructor(private element: Element) {
    }

    @bindable()
    public options = {};

    private picker;

    public attached() {
        this.element.classList.add("datepicker");
        $(this.element).pickadate(this.options);
        this.picker = $(this.element).pickadate("picker");
        this.element.addEventListener("focus", this.openFunction.bind(this));
        $(this.picker).on({ "set" : this.onSet.bind(this) });
    }

    public detached() {
        this.element.classList.remove("datepicker");
        this.element.removeEventListener("focus", this.openFunction);
        if (this.picker) {
            $(this.picker).stop();
        }
    }

    public onSet(value) {
        this.fireEvent(this.element, "input");
    }

    public valueChanged(newValue) {
        this.picker.set("select", newValue);
    }

    private openFunction() {
        this.picker.open();
    }

    private createEvent(name) {
        let event = document.createEvent("Event");
        event.initEvent(name, true, true);
        return event;
    }

    private fireEvent(element, name) {
        element.dispatchEvent(this.createEvent(name));
    }
}
