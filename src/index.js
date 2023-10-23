import './style.css'
import './modules'

import Game from './modules/game'

const game = new Game();
console.log(game.human.gameboard.board);