import AIcontrol from '../modules/ai'

const AI = new AIcontrol;

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test ('generate random move', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
    expect(AI.randomSquare()).toBe('1,1')
    jest.spyOn(global.Math, 'random').mockRestore();
});

test ('pick unplayed square', () => {
    AI.moves.set('3,1', 'played');
    expect(AI.findUnplayedSquare('3,1')).toBe('1,1')
});

