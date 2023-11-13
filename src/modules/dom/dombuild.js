import Gameboard from '../gameboard'
import Player from '../player'
import { placeShip, dragover } from './domcontroller';
export {buildPage, buildFleetBoard, buildMovesBoard}


function buildPage() {
    const content = document.getElementById('content');
    content.innerHTML = `<div class='section' id='humansection'>
        <div class='gameboard' id='humanfleet'></div>
        <div class='gameboard' id='humanmoves'></div>
    </div>
    <div class='section' id='botsection'>
        <div class='gameboard' id='aifleet'></div>
        <div class='gameboard' id='aimoves'></div>
    </div>
    <div class='ship-select' id='ship-select'>
        <div class='ship' draggable='true' id='0carrier' data-length=5>Carrier</div>
        <div class='ship' draggable='true' id='1battleship' data-length=4>Battleship</div>
        <div class='ship' draggable='true' id='2destroyer' data-length=3>Destroyer</div>
        <div class='ship' draggable='true' id='3submarine' data-length=2>Submarine</div>
        <div class='ship' draggable='true' id='4patrol-boat' data-length=1>Patrol Boat</div>
    </div>
    `
}

function buildFleetBoard(board, player) {
    const gameboard = document.getElementById(`${player}fleet`);
    gameboard.textContent = '';
    board.forEach((a, b) => {
        let coords = b.replace(/[^0-9]/ig, "")
        const square = document.createElement('div');
        square.setAttribute('class', 'fleetsquare');
        square.setAttribute('id', `fleet${player}${coords}`)
        if (a !== 'empty') {
            square.innerHTML = a;
        }
        gameboard.append(square);
    })
}

function buildMovesBoard(board, player) {
    const gameboard = document.getElementById(`${player}moves`);
    gameboard.textContent = '';
    board.forEach((a, b) => {
        let coords = b.replace(/[^0-9]/ig, "")
        const square = document.createElement('div');
        square.setAttribute('class', 'movesquare');
        square.setAttribute('id', `move${player}${coords}` )
        if (a === 'hit') {
            square.innerHTML = 'H'
        }
        else if (a === 'miss') {
            square.innerHTML = 'M'
        }
        gameboard.append(square);
    })
}

//ondragstart=alert(id)