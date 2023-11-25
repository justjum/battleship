import Player from '../modules/player'
import {controller, aiControl} from './index'
import DOMController from './dom/domcontroller';
import { buildFleetBoard } from './dom/dombuild';

export default class Game {
    constructor() {
        this.human = new Player('Anonymous', false);
        this.ai = new Player('Battlebot', true);
        this.attack = this.human;
        this.defend = this.ai;
    }

    playGame() {
        if (this.attack === this.human) {
            controller.gameplayEventListeners();
        }
        else {
            let square = aiControl.aimove();
            aiControl.moves.set(square, 'played')
            let coords = square.replace(/[^0-9]/ig, "")
            let xpos = coords[0];
            let ypos = coords[1];
            this.human.gameboard.receiveAttack(xpos,ypos)
            buildFleetBoard(this.human.gameboard.board, 'human')
            this.endTurn();
            this.playGame();
        }
    }

    endTurn() {
        let temp = this.attack;
        this.attack = this.defend;
        this.defend = temp;
    }

}

