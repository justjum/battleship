class Gameboard {
    constructor() {
        this.board = new Map()
    }

    buildBoard() {
        for (let x=0; x<10; x++) {
            for (let y=0; y<10; y++) {
                this.board.set([x,y].toString(),'empty');
            }
        }
    }

/*     placeShip(name, length, position, alignment) {
        for (let x=1; x<=length; x++) {
            if ()
        }
    } */

}

const game = new Gameboard();
game.buildBoard()
console.log(game.board);
console.log(game.board.get('0,0'))
