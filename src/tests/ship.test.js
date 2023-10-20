import Ship from '../modules/ship'

test ('create battleship', () => {
    let battleship = new Ship('battleship', 6)
    expect(battleship.name).toBe('battleship');
});

test ('create submarine and add hit', () => {
    let submarine = new Ship('submarine', 3)
    expect(submarine.hits).toBe(0);
    submarine.hit();
    expect(submarine.hits).toBe(1);
});

test ('create patrol boat and sink', () => {
    let patrolBoat = new Ship('patrol boat', 2);
    expect(patrolBoat.isSunk()).toBe(false);
    patrolBoat.hit();
    patrolBoat.hit();
    expect(patrolBoat.isSunk()).toBe(true);
})

