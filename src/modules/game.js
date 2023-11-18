import Player from '../modules/player'
import {controller} from '../index'
import DOMController from './dom/domcontroller';

export default class Game {
    constructor() {
        this.human = new Player('greg', false);
        this.ai = new Player('battlebot', true);
        this.attack = this.human;
        this.defend = this.ai;
    }

    playGame() {
        if (this.attack === this.human) {
            this.gameplayEventListeners();
        }
        else {
            let square = aiControl.aimove();
            aiControl.moves.set(square, 'played')
            let coords = square.replace(/[^0-9]/ig, "")
            let xpos = coords[0];
            let ypos = coords[1];
            this.ai.gameboard.receiveAttack(xpos,ypos)
            buildMovesBoard(this.ai.gameboard.board, `ai`)
            console.log(aiControl.moves)
            this.endTurn();
            playGame();
        }
    }

    endTurn() {
        let temp = this.attack;
        this.attack = this.defend;
        this.defend = temp;
    }

    gameplayEventListeners() {
        const moveSquare = document.querySelectorAll('.movesquare');
        moveSquare.forEach((square) => {
            if (square.innerHTML === 'H' || square.innerHTML === 'M') {
                return;
            }
            square.addEventListener('mousedown', function() {
                let player = square.id.replace(/[^a-z]/ig, "")
                let coords = square.id.replace(/[^0-9]/ig, "")
                let xpos = coords[0];
                let ypos = coords[1];
                this.ai.gameboard.receiveAttack(xpos,ypos)
                buildMovesBoard(this.ai.gameboard.board, `${ai}` )
                game.endTurn();
                playGame();
            })
        });
    }
}

