import Gameboard from './gameboard'

export default class Player {
    constructor(name, turn = false, control) {
        this.name = name;
        this.turn = turn;
        this.ai = control,
        this.gameboard = new Gameboard(name);
    }

    endTurn() {
        this.turn = !this.turn;
    }
} 