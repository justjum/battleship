import {game, controller} from '../index'
import { buildMovesBoard, buildFleetBoard } from './dombuild';
import Player from '../player'

export default class DOMController {
    constructor(orient=true) {
        this.orient = orient;
    }

    loadShipPlacement() {
        const dragShip = document.querySelectorAll('.ship');
        dragShip.forEach((ship) => {
            ship.addEventListener('dragstart', this.dragStart); 
            ship.addEventListener('dragend', this.dragEnd);
        });
        this.fleetEventListeners();
    }

    fleetEventListeners() {
        const fleetSquare = document.querySelectorAll('.fleetsquare');
        fleetSquare.forEach((square) => {
            square.addEventListener('dragover', this.dragOverEventHandler);
            square.addEventListener('dragleave', this.dragLeaveEventHandler);
            square.addEventListener('drop', this.dropEventHandler);
        });
    }

    dragStart(event) {
        this.classList.add('dragging')
    }

    dragEnd(event){
        event.preventDefault();
        this.classList.remove('dragging');
    }

    dragOverEventHandler(event) {
        event.preventDefault();
        const dragging = document.querySelector('.dragging')
        let length = dragging.getAttribute('data-length');
        let coords = this.id.replace(/[^0-9]/ig, "");
        let xpos = coords[0];
        let ypos = coords[1];
        let validDrop = true;
        if (game.human.gameboard.checkValidDrop(length, xpos, ypos, controller.orient) === false) {
            validDrop = false;
        }
        controller.colorDropSquares(xpos, ypos, length, this.orient, validDrop)
    }

    colorDropSquares(xpos, ypos, length, orient, validDrop) {
        for (let x=0; x<length; x++) {
            const square = document.getElementById(`fleethuman${xpos}${ypos}`)
            if (square !== null) {
                validDrop ? square.classList.add('allowed') : square.classList.add('disallowed');
            }
            
            orient ? xpos++ : ypos++;
        }
        
    }    

    dragLeaveEventHandler(event) {
        event.preventDefault();
        controller.decolorDropSquares()
    }

    decolorDropSquares() {
        const elements = document.querySelectorAll('*');
        elements.forEach((square) => {
            square.classList.remove('allowed');
            square.classList.remove('disallowed');
        });
    
    };

    dropEventHandler(event, fleet) {
        event.preventDefault();
        const dragging = document.querySelector('.dragging')
        let index = dragging.id.replace(/[^0-9]/ig, "");
        let coords = this.id.replace(/[^0-9]/ig, "")
        let length = dragging.getAttribute('data-length');
        let xpos = coords[0];
        let ypos = coords[1];
        if (game.human.gameboard.checkValidDrop(length, xpos, ypos, controller.orient) === true) {
            game.human.gameboard.placeShip(index, length, xpos, ypos)
            buildFleetBoard(game.human.gameboard.board, 'human');
            dragging.removeAttribute('draggable');
            dragging.classList.add('placedship')
            dragging.removeEventListener('dragstart', this.dragstart)
            game.human.placedShips--
        }
        if (game.human.placedShips > 0) {
            controller.fleetEventListeners();
        }
        else {
            alert('lets go');
            game.playGame();
        }
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
                game.ai.gameboard.receiveAttack(xpos,ypos)
                buildMovesBoard(game.ai.gameboard.board, `human` )
                game.endTurn();
                game.playGame();
            })
        });
    }


}



