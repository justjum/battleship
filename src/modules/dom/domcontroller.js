import Game from '../game'
import Player from '../player'

export function playGame() {
    const moveSquare = document.querySelectorAll('.movesquare');
    moveSquare.forEach((square) => {
        square.addEventListener('mousedown', function() {
            console.log(square);
        })
    });
};