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
    <div class='ship-select' id='ship-select'>
        <div class='ship' id='carrier'><div class=ship-square></div><div class=ship-square></div><div class=ship-square></div><div class=ship-square></div><div class=ship-square></div></div>
        <div class='ship' id='battleship'><div class=ship-square></div><div class=ship-square></div><div class=ship-square></div><div class=ship-square></div></div>
        <div class='ship' id='destroyer'><div class=ship-square></div><div class=ship-square></div><div class=ship-square></div></div>
        <div class='ship' id='submarine'><div class=ship-square></div><div class=ship-square></div></div>
        <div class='ship' id='patrol-boat'><div class=ship-square></div></div>
    </div>
    `
}

function buildFleetBoard(board, player) {
    const gameboard = document.getElementById(`${player}fleet`);
    board.forEach((a) => {
        const square = document.createElement('div');
        square.setAttribute('class', 'fleetsquare');
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
        square.setAttribute('id', `${player}${coords}` )
        if (a === 'hit') {
            square.innerHTML = 'H'
        }
        else if (a === 'miss') {
            square.innerHTML = 'M'
        }
        gameboard.append(square);
    })
}