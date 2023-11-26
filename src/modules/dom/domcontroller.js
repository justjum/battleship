import {game, controller} from '../index'
import { buildMovesBoard, buildFleetBoard } from './dombuild';
import Compassx from '../../images/compassx.png'
import Compassy from '../../images/compassy.png'
import Player from '../player'

export default class DOMController {
    constructor(orient=true) {
        this.orient = orient;
        
    }

    acceptInstructions() {
        document.getElementById('playgame').onclick = () => {
            let input = document.getElementById('player-name');
            if (input.value !== "") {
                game.human.name = input.value;
                document.getElementById('instructions').style.display = 'none'
                this.toggleGrey('none');
            }
            else {
                input.classList.add('required');
            }
            
        }
    }

    toggleGrey(value) {
        const greyOut = document.getElementById('grey-out');
        greyOut.style.display = value;
    }

    alert(message) {
        this.toggleGrey('flex');
        const alertBox = document.getElementById('alert-box');
        alertBox.children[0].innerText = message;
        alertBox.style.display = 'flex';
    }

    alertListener() {
        document.getElementById('accept-alert').onclick = () => {
            this.acceptAlert();
        }
    }

    acceptAlert() {
        this.toggleGrey('none');
        document.getElementById('alert-box').style.display = 'none'
    }

    gameOver(message) {
        this.toggleGrey('flex');
        const gameOverBox = document.getElementById('game-over-box');
        gameOverBox.children[0].innerText = message;
        gameOverBox.style.display = 'flex';
    }

    gameOverListener() {
        document.getElementById('restart-game').onclick = () => {
            document.location.reload();
        }
    }

    loadShipPlacement() {
        const dragShip = document.querySelectorAll('.ship');
        dragShip.forEach((ship) => {
            ship.addEventListener('dragstart', this.dragStart); 
            ship.addEventListener('dragend', this.dragEnd);
        });
        this.fleetEventListeners();
        this.compassEventListener();
        this.acceptInstructions();
        this.alertListener();
        this.gameOverListener();
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
        controller.colorDropSquares(xpos, ypos, length, validDrop)
    }

    colorDropSquares(xpos, ypos, length, validDrop) {
        for (let x=0; x<length; x++) {
            const square = document.getElementById(`fleethuman${xpos}${ypos}`)
            if (square !== null) {
                validDrop ? square.classList.add('allowed') : square.classList.add('disallowed');
            }
            
            controller.orient ? xpos++ : ypos++;
        }
        
    }    

    dragLeaveEventHandler(event) {
        event.preventDefault();
        controller.decolorDropSquares()
    }

    decolorDropSquares() {
        const elements = document.querySelectorAll('.fleetsquare');
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
            game.human.gameboard.placeShip(index, length, xpos, ypos, controller.orient)
            buildFleetBoard(game.human.gameboard.board, 'human');
            dragging.classList.add('placedship');
            dragging.removeEventListener('dragstart', this.dragStart)
            dragging.removeEventListener('dragstart', this.dragEnd, false)
            dragging.setAttribute('draggable', false)
            game.human.placedShips--
        }
        if (game.human.placedShips > 0) {
            controller.fleetEventListeners();
        }
        else {
            controller.alert(`Let's go!`)
            document.getElementById('aisection').style.opacity = 1;
            game.playGame();
        }
    }

    compassEventListener() {
        const compass = document.getElementById('compass');
        compass.addEventListener('click', ()=>{
            this.orient = !this.orient;
            let compassImage = this.orient ? Compassx : Compassy;
            console.log(compassImage)
            compass.setAttribute('src', `${compassImage}`)
        })
    }

    gameplayEventListeners() {
        const moveSquare = document.querySelectorAll('.movesquare');
        moveSquare.forEach((square) => {
            if (square.hasAttribute('played')) {
                console.log('yup');
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



