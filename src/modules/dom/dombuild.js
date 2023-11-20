import Gameboard from '../gameboard'
import Player from '../player'
import { placeShip, dragover } from './domcontroller';
import Carrier from '../../images/carrier.png'
import Battleship from '../../images/battleship.png'
import Destroyer from '../../images/destroyer.png'
import Submarine from '../../images/submarine.png'
import PatrolBoat from '../../images/patrolboat.png'
export {buildPage, buildFleetBoard, buildMovesBoard}


function buildPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <h1>Sink the Ships!</h1>
    <div class='section' id='humansection'>
        <div class='gameboard' id='humanfleet'></div>
        <div class='ship-select' id='ship-select'>
        <div class='ship' draggable='true' id='0carrier' data-length=5><img src='${Carrier}'></div>
        <div class='ship' draggable='true' id='1battleship' data-length=4><img src='${Battleship}'></div>
        <div class='ship' draggable='true' id='2destroyer' data-length=3><img src='${Destroyer}'></div>
        <div class='ship' draggable='true' id='3submarine' data-length=2><img src='${Submarine}'></div>
        <div class='ship' draggable='true' id='4patrol-boat' data-length=1><img src='${PatrolBoat}'></div>
    </div>
    </div>
    <div class='section' id='aisection'>
        <div class='gameboard' id='humanmoves'></div>
        <div class='ship-select' id='ship-ai'>
        <div class='aiship' draggable='false' id='aicarrier'><img src='${Carrier}'></div>
        <div class='aiship' draggable='false' id='aibattleship'><img src='${Battleship}'></div>
        <div class='aiship' draggable='false' id='aidestroyer'><img src='${Destroyer}'></div>
        <div class='aiship' draggable='false' id='aisubmarine'><img src='${Submarine}'></div>
        <div class='aiship' draggable='false' id='aipatrolboat'><img src='${PatrolBoat}'></div>
    </div>
    </div>
    <div class='fleets'>


    </div>
    <div class='footer'>
        <a href="https://www.freepik.com/free-vector/set-silhouettes-naval-ships_11052928.htm#query=warship&position=0&from_view=keyword&track=sph&uuid=964a7c96-eef1-485b-ae2d-68a3463e1a03">Battleship Images by macrovector on Freepik</a>
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