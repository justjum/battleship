export default class Ship {
    constructor(name, length, hits = 0, sunk = false) {
        this.name = name;
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
    } 
    
    hit() {
        this.hits++
        this.isSunk();
        this.sunk ? this.shipSunk():'';
    }

    isSunk() {
        this.sunk = this.length === this.hits ? true : false;
        
    }

    shipSunk() {
        alert(`You sunk my ${this.name}`)
    }
}




/* const battleship = new Ship('battleship', 5);
console.log(battleship.name);
console.log(battleship.length);
console.log(battleship)
 */

//shipSunk(this.name): this.sunk=false;
