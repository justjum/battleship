import {buildPage, buildFleetBoard, buildMovesBoard} from './dom/dombuild'
import DOMController from './dom/domcontroller';
import Game from './game';
import Ship from './ship';
import AIcontrol from './ai';

const controller = new DOMController;
const game = new Game;

const aiControl = new AIcontrol;
console.log(game.human.gameboard.board);
buildPage();
buildFleetBoard(game.human.gameboard.board, 'human');
buildMovesBoard(game.ai.gameboard.board, 'ai');
buildFleetBoard(game.ai.gameboard.board, 'ai');
buildMovesBoard(game.human.gameboard.board, 'human');
controller.loadShipPlacement();
game.playGame();

export {game, controller}