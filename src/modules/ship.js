export default class Ship {
    constructor(name, length, hits = 0, sunk = false) {
        this.name = name;
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
    } 
    
    hit() {
        this.hits++
    }

    isSunk() {
        return this.length === this.hits ? true : false;
    }
}

function shipSunk(ship) {
    ship.sunk = true;
    console.log(`You sunk my ${ship}`)
    gameActive();
}


/* const battleship = new Ship('battleship', 5);
console.log(battleship.name);
console.log(battleship.length);
console.log(battleship)
 */

//shipSunk(this.name): this.sunk=false;
