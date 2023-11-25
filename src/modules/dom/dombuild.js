import Gameboard from '../gameboard'
import Player from '../player'
import { placeShip, dragover } from './domcontroller';
import Carrier from '../../images/carrier.png'
import Battleship from '../../images/battleship.png'
import Destroyer from '../../images/destroyer.png'
import Submarine from '../../images/submarine.png'
import PatrolBoat from '../../images/patrolboat.png'
import Compassx from '../../images/compassx.png'
import Miss from '../../images/miss.png'
import Hit from '../../images/hit.png'
export {buildPage, buildFleetBoard, buildMovesBoard}


function buildPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class='grey-out' id='grey-out'></div>
    <h1>Sink the Ships!</h1>
    <div class='container' id='container'>
        <div class='section' id='humansection'>
            <div class='alert-box' id='alert-box'>
                <h2 class='alert' id='alert'>Alert</h2>
                <button class='accept-alert' id='accept-alert'>Ok!</button>
            </div>
            <div class='instructions' id='instructions'>
                <p>1. Please enter your name below:</p>
                <input type='text' class='player-name' id='player-name' name='player-name' placeholder='Please enter your name here'>
                <p>2. Drag and drop your fleet onto the gameboard</p>
                <p>3. Click on the compass to adjust the direction of drop</p>
                <button class='playgame' id='playgame'>I'm ready!</button>
            </div>
            <div class='gameboard' id='humanfleet'></div>
            <div class='ship-select' id='ship-select'>
                <img class='ship' draggable='true' id='0carrier' data-length=5 src='${Carrier}'>
                <img class='ship' draggable='true' id='1battleship' data-length=4 src='${Battleship}'>
                <img class='ship' draggable='true' id='2destroyer' data-length=3 src='${Destroyer}'>
                <img class='ship' draggable='true' id='3submarine' data-length=2 src='${Submarine}'>
                <img class='ship' draggable='true' id='4patrol-boat' data-length=1 src='${PatrolBoat}'>
                <img class='compass' id='compass' src='${Compassx}'>
            </div>
        </div>
        <div class='section' id='aisection'>
            <div class='gameboard' id='humanmoves'></div>
            <div class='ship-select' id='ship-ai'>
                <img class='aiship' draggable='false' id='aicarrier' src='${Carrier}'>
                <img class='aiship' draggable='false' id='aibattleship' src='${Battleship}'>
                <img class='aiship' draggable='false' id='aidestroyer' src='${Destroyer}'>
                <img class='aiship' draggable='false' id='aisubmarine' src='${Submarine}'>
                <img class='aiship' draggable='false' id='aipatrolboat' src='${PatrolBoat}'>
            </div>
        </div>
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
            let icon = document.createElement('img');
            icon.setAttribute('src', a);
            square.appendChild(icon);
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
            square.innerHTML = `<img class='icon' src=${Hit}>`
        }
        else if (a === 'miss') {
            square.innerHTML = `<img class='icon' src=${Miss}>`
        }
        gameboard.append(square);
    })
}
