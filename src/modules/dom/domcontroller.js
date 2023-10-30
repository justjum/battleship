import {game} from '../index'
import { buildMovesBoard } from './dombuild';
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