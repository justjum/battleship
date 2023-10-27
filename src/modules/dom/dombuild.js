import Gameboard from '../gameboard'
import Player from '../player'
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
    `
}

function buildFleetBoard(board, player) {
    const gameboard = document.getElementById(`${player}fleet`);
    board.forEach((a) => {
        const square = document.createElement('div');
        square.setAttribute('class', 'fleetsquare');
        if (a !== 'empty') {
            square.innerHTML = a[0];
        }
        gameboard.append(square);
    })
}

function buildMovesBoard(board, player) {
    const gameboard = document.getElementById(`${player}moves`);
    board.forEach((a) => {
        const square = document.createElement('div');
        square.setAttribute('class', 'movesquare');
        if (a === 'hit') {
            square.innerHTML = 'H'
        }
        else if (a === 'miss') {
            square.innerHTML = 'M'
        }
        gameboard.append(square);
    })
}