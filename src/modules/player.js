import Gameboard from './gameboard'
import AIcontrol from './ai'

export default class Player {
    constructor(name, control) {
        this.name = name;
        this.ai = control,
        this.gameboard = new Gameboard(name);
        this.placedShips = 5;
    }

    aiTurn() {

    }
} 



//human and ai placements to come later