import Game from '../modules/game'

const game = new Game;

test ('change of turns', () => {
    expect(game.attack.name).toBe('greg');
    expect(game.defend.name).toBe('battlebot');
    game.endTurn()
    expect(game.attack.name).toBe('battlebot');
    expect(game.defend.name).toBe('greg');
   
});