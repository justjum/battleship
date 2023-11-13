import {buildPage, buildFleetBoard, buildMovesBoard} from './dom/dombuild'
import {playGame} from './dom/domcontroller'
import {loadShipPlacement} from './dom/domcontroller';
import Game from './game'
import Ship from './ship';


const game = new Game;
console.log(game.human.gameboard.board);
buildPage();
buildFleetBoard(game.human.gameboard.board, 'human');
buildMovesBoard(game.ai.gameboard.board, 'ai');
buildFleetBoard(game.ai.gameboard.board, 'ai');
buildMovesBoard(game.human.gameboard.board, 'human');
loadShipPlacement();
playGame();

export {game}