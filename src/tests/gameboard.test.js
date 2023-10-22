import Gameboard from '../modules/gameboard'
import Ship from '../modules/ship'
import { testship } from '../modules/gameboard';

let game;


beforeEach(() => {
    game = new Gameboard();
    game.buildBoard();

})



test ('check game board co-ordinates', () => {
    expect(game.board.get('0,0')).toBe('empty');
    expect(game.board.get('9,9')).toBe('empty');
});

test ('place ship horizontal', () => {
    game.placeShipHor('battleship', 4, 0, 0);
    expect(game.board.get('0,0')).toBe('battleship');
    expect(game.board.get('3,0')).toBe('battleship');
    expect(game.board.get('0,1')).toBe('empty');
});

test ('place ship vertical', () => {
    game.placeShipVer('carrier', 5, 0, 0);
    expect(game.board.get('0,0')).toBe('carrier');
    expect(game.board.get('0,4')).toBe('carrier');
    expect(game.board.get('1,1')).toBe('empty');
}); 

test ('fleet size increments by 1', () => {
    game.placeShipVer('carrier', 5, 0, 0);
    expect(game.fleet).toEqual(1);
    game.placeShipHor('battleship', 4, 4, 4);
    expect(game.fleet).toEqual(2);
});

test ('fleet size decrements by 1', () => {
    game.placeShipHor('testship', 4, 0, 0);
    expect(game.fleet).toEqual(1);
    game.receiveAttack(0,0);
    game.receiveAttack(1,0);
    game.receiveAttack(2,0);
    game.receiveAttack(3,0);
    expect(game.fleet).toEqual(0);
});

test ('check space is in bounds', () => {
    expect(game.checkSpace(10, 0)).toBe('off board');
    
})

test ('check space is empty', () => {
    game.placeShipHor('battleship', 4, 0, 0);
    expect(game.checkSpace(0, 0)).toBe('battleship');
});

test ('record a miss', () => {
    game.receiveAttack(2,0);
    expect(game.board.get('2,0')).toBe('miss');
})

test ('record a hit', () => {
    game.placeShipHor('testship', 4, 0, 0);
    game.receiveAttack(2,0);
    expect(game.board.get('2,0')).toBe('hit');
    testship.hits = 0;
})

test ('hit function adds one point to specified vessel', () => {
    game.placeShipHor('testship', 4, 0, 0);
    game.receiveAttack(2,0);
    expect(testship.hits).toBe(1);
} )






