import Player from '../modules/player'

export default class Game {
    constructor() {
        this.human = new Player('greg', false);
        this.ai = new Player('battlebot', true);
        this.attack = this.human;
        this.defend = this.ai;
    }

    endTurn() {
        let temp = this.attack;
        this.attack = this.defend;
        this.defend = temp;
    }
}

