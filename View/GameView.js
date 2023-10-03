import FieldView from "./FieldView.js";

class GameView {
    constructor() {
        this.#initFields();
    }

    #initFields() {
        for (let index = 0; index < 9; index++) {
            new FieldView($("#playGround"), index);
        }
    }
}

export default GameView;