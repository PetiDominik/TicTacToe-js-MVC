class FieldView {
    #parent;
    #element;
    #id;
    #enabled;

    constructor(PARENT, id) {
        this.#parent = PARENT;
        this.#id = id;
        this.#enabled = true;

        this.#htmlAppend(id);
        this.#element = this.#parent.children(".field").last();

        this.#element.on("click", () => {
            if (!this.#enabled) {return;}
            this.#enabled = false;
            
            this.#handleClick();

        });
    }

    #htmlAppend() {
        let txt = `<div class="field"></div>`;

        this.#parent.append(txt);
    }

    #handleClick() {
        window.dispatchEvent(new CustomEvent("fieldClick", {detail : this}));
    }

    getId() {
        return this.#id;
    }

    setValue(value) {
        this.#element.html(value);
    }
}

export default FieldView;