
class Fields {
    #fields;
    #steps;

    constructor() {
        this.#steps = 0;
        this.#initFields();
        
    }

    #initFields() {
        this.#fields = [];
        for (let index = 0; index < 9; index++) {
            this.#fields.push("");
        }
    }

    getValueById(id) {
        return this.#fields[id];
    }

    getAllValue() {
        return [...this.#fields];
    }

    setValueById(index) {
        this.#fields[index] = this.#steps % 2 == 0 ? "X" : "O";
        
        this.#steps++
        this.#checkWinner();
    }

    #checkWinner() {
        if (this.#isTie()) {
            alert("Döntetlen!");
        }
        const winner = this.#otherCheck();

        if (winner == "X") {
            alert("Játékos 1. nyert!");
        } else if (winnder == "O") {
            alert("Játékos 2. nyert!");
        }
    }

    #isTie() {
        let i = 0;
        while (i < this.#fields.length && this.#fields[i] != "") {
            i++;
        }
        return i >= this.#fields.length;
    }

    #otherCheck() {
        let txt = "";

        for (let index = 0; index < this.#fields.length; index++) {
            let field = this.#fields[index];

            txt += field;
            txt += index % 3 == 2 ? "@" : "";
            
        }

        if (txt.indexOf("OOO") > 0) {
            return "O"
        } else if (txt.indexOf("XXX") > 0) {
            return "X"
        }
        return "";
    }
}

export default Fields;