import Player from '../modules/player'
import Gameboard from '../modules/gameboard'

const human = new Player('Greg', false)

test ('check player name', () => {
    expect(human.name).toBe('Greg');
});

test ('check player gameboard co-ordinates', () => {
    expect(human.gameboard.board.get('0,0')).toBe('empty')
});



