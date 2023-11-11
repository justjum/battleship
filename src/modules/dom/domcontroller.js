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
        ship.addEventListener('dragstart', dragstart, true); 
        ship.addEventListener('dragend', dragend(ship));
    });
    fleetEventListeners();
    }


function fleetEventListeners(fleet=5) {
    const fleetSquare = document.querySelectorAll('.fleetsquare');
    fleetSquare.forEach(square => {
        square.addEventListener('dragover', (e) => {
            e.preventDefault();
            const dragging = document.querySelector('.dragging')
            let id = dragging.id;
            let length = dragging.getAttribute('data-length');
            let coords = square.id;
            const validDrop = false;
        });
        square.addEventListener('drop', () => {
            console.log('drop')
            const dragging = document.querySelector('.dragging')
            let index = dragging.id.replace(/[^0-9]/ig, "");
            console.log(index);
            let coords = square.id.replace(/[^0-9]/ig, "")
            let length = dragging.getAttribute('data-length');
            let xpos = coords[0];
            let ypos = coords[1];
            game.human.gameboard.placeShip(index, length, xpos, ypos)
            buildFleetBoard(game.human.gameboard.board, 'human');
            console.log(game.human.gameboard.board);
            dragging.removeAttribute('draggable');
            dragging.classList.add('placedship')
            dragging.removeEventListener('dragstart', dragstart())
            dragging.removeEventListener('dragend', dragend());
            fleet--
            if (fleet !== 0) {
                fleetEventListeners(fleet);
            }
        });
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

function dragstart(ship) {
    console.log(`drag ${ship.id}`);
    console.log(ship);
    ship.classList.add('dragging');
};

function dragend(ship) {
        ship.classList.remove('dragging');
    } 

function placeShip(e, ship) {
    e.preventDefault();
    alert(`place me`)
}

function checkSpace(ship, length, square) {
    
}

export {placeShip, checkSpace, loadShipPlacement}