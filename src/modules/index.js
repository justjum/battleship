import {buildPage, buildFleetBoard, buildMovesBoard} from './dom/dombuild'
import DOMController from './dom/domcontroller';
import Game from './game';
import Ship from './ship';
import AIcontrol from './ai';
import Carrier from '../images/carrier.png'
import Battleship from '../images/battleship.png'
import Destroyer from '../images/destroyer.png'
import Submarine from '../images/submarine.png'
import PatrolBoat from '../images/patrolboat.png'


buildPage();
const controller = new DOMController;
const game = new Game;

const aiControl = new AIcontrol;
console.log(game.human.gameboard.board);
console.log(game.ai.gameboard.board);

buildFleetBoard(game.human.gameboard.board, 'human');
buildMovesBoard(game.human.gameboard.board, 'human');
controller.loadShipPlacement();

export {game, controller, aiControl}