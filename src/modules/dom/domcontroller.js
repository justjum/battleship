import {game} from '../index'
import { buildMovesBoard, buildFleetBoard } from './dombuild';
import Player from '../player'
import AIcontrol from '../ai';

let aiControl = new AIcontrol;

export function playGame() {
    if (game.attack === game.human) {
        loadEventListeners();
    }
    else {
        let square = aiControl.aimove();
        aiControl.moves.set(square, 'played')
        let coords = square.replace(/[^0-9]/ig, "")
        let xpos = coords[0];
        let ypos = coords[1];
        game.ai.gameboard.receiveAttack(xpos,ypos)
        buildMovesBoard(game.ai.gameboard.board, `ai`)
        console.log(aiControl.moves)
        game.endTurn();
        playGame();
        console.log(square);
    }
};

function loadShipPlacement() {
    const dragShip = document.querySelectorAll('.ship');
    dragShip.forEach(ship => {
        console.log(ship.id)
        ship.addEventListener('dragstart', dragstart); 
        ship.addEventListener('dragend', dragend);
    });
    fleetEventListeners();
    }


function fleetEventListeners() {
    const fleetSquare = document.querySelectorAll('.fleetsquare');
    fleetSquare.forEach(square => {
        square.addEventListener('dragover', dragoverEventHandler);
        square.addEventListener('drop', dropEventHandler);
    });
};

function loadEventListeners() {
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
            game[player].gameboard.receiveAttack(xpos,ypos)
            buildMovesBoard(game[player].gameboard.board, `${player}` )
            game.endTurn();
            playGame();
        })
    });
}

function dragstart() {
    this.classList.add('dragging');
};

function dragend(event) {
    event.preventDefault();
    this.classList.remove('dragging');
    } 

function dragoverEventHandler(event) {
    event.preventDefault();
    const dragging = document.querySelector('.dragging')
    let length = dragging.getAttribute('data-length');
    console.log(this)
    let coords = this.id.replace(/[^0-9]/ig, "");
    let xpos = coords[0];
    let ypos = coords[1];
    let tempx = xpos;
    let tempy = ypos;
    console.log(length)
    let orient = true;
    for (let x=1; x<=length; x++) {
        const square = document.getElementById(`fleethuman${tempx}${tempy}`)
        let status = game.human.gameboard.checkSpace(tempx, tempy);
        console.log(status);
        if (status === 'empty') {
            square.classList.add('allowed');
        }
        orient ? tempx++ : tempy++;
    }
    const validDrop = false;
}

function dropEventHandler(event, fleet) {
    event.preventDefault();
    console.log('drop')
    const dragging = document.querySelector('.dragging')
    let index = dragging.id.replace(/[^0-9]/ig, "");
    let coords = this.id.replace(/[^0-9]/ig, "")
    let length = dragging.getAttribute('data-length');
    let xpos = coords[0];
    let ypos = coords[1];
    game.human.gameboard.placeShip(index, length, xpos, ypos)
    buildFleetBoard(game.human.gameboard.board, 'human');
    console.log(game.human.gameboard.board);
    dragging.removeAttribute('draggable');
    dragging.classList.add('placedship')
    dragging.removeEventListener('dragstart', dragstart)
    game.human.placedShips--
    console.log(game.human.placedShips);
    if (game.human.placedShips >= 0) {
        fleetEventListeners();
    }
}

export {loadShipPlacement}