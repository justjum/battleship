import Gameboard from '../modules/gameboard'

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

test ('check space is in bounds', () => {
    expect(game.checkSpace(4, 9, 0)).toBe('off board');
    
})

test ('check space is empty', () => {
    game.placeShipHor('battleship', 4, 0, 0);
    expect(game.checkSpace(4, 0, 0)).toBe('vessel');
});

test ('record a miss', () => {
    game.receiveAttack(2,0);
    expect(game.board.get('2,0')).toBe('miss');
})

test ('record a hit', () => {
    game.placeShipHor('battleship', 4, 0, 0);
    game.receiveAttack(2,0);
    expect(game.board.get('2,0')).toBe('hit');
})



// add hit point to specified vessel.




