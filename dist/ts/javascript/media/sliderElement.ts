import { bindable, bindingMode, containerless, customElement } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.slider)
@containerless
export class SliderElement {

    @bindable()
    public id: string;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false })
    public fullscreen: boolean;

    public sliderDiv: HTMLDivElement;

    public attached() {

        let options = { full_width: false };

        if (this.fullscreen) {
            this.sliderDiv.classList.add("fullscreen");
            options.full_width = true;
        }

        $(this.sliderDiv).slider(options);
    }

    public detached() {
        this.sliderDiv.classList.remove("fullscreen");
    }
}
