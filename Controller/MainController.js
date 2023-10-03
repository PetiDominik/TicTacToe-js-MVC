import Fields from "../Model/Fields.js";
import GameView from "../View/GameView.js";

class MainController {
    #fields;

    constructor() {
        /* this.#fields = new Fields(); */
        this.#initFields();

        $(window).on("fieldClick", (event) => {
            const ELEMENT = event.detail;
            const ID = ELEMENT.getId();

            this.#fields.setValueById(ID);
            ELEMENT.setValue(this.#fields.getValueById(ID));
        });
    }

    #initFields() {
        this.#fields = new Fields();
        new GameView($("#playGround"));
    }
}

export default MainController;