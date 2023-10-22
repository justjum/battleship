import Ship from './ship'

export default class Gameboard {
    constructor(name) {
        this.player = name;
        this.board = this.buildBoard();
        this.fleet = 0;
        this.gameOver = false;
    }

    //originally used a standard array however 'map' made referencing/updating squares simpler
    buildBoard() {
        let board = new Map();
        for (let x=0; x<10; x++) {
            for (let y=0; y<10; y++) {
                board.set([x,y].toString(),'empty');
            }
        }
        return board;
    }

    checkSpace(xpos, ypos) {
        
        let status = this.board.get(`${xpos},${ypos}`);
        if (status === undefined) {
            return 'off board'
        }
        else if (status === 'empty') {
            xpos++;
        }
        else {
            return `${status}`
        }
            
        
        return 'empty';
    }
    //originally had very similar hor/vert functions, ternery operator on 'orientation' neater refactor
    placeShip(name, length, xpos, ypos, orient) {
        for (let x=1; x<=length; x++) {
            let tempx = xpos;
            let status = this.checkSpace(xpos, ypos);
            if (status !== 'empty') {
                return console.log('block')
            }
            tempx++;
        }
        for (let y=1; y<=length; y++) {
                this.board.set(`${xpos},${ypos}`, name);
            orient ? xpos++ : ypos++;
        }
        this.fleet++;
    }
     
    receiveAttack(xpos, ypos) {
        let space = this.checkSpace(xpos, ypos);
        if (space === 'empty') {
            this.board.set(`${xpos},${ypos}`, 'miss');
        }
        else if (space !== undefined) {
            this.board.set(`${xpos},${ypos}`, 'hit')
            eval(space).hit();
            eval(space).sunk ? this.fleet-- : '';
        }
        else {
            return;
        }
    }
    

}

//const game = new Gameboard();
export const testship = new Ship('testship', 4);





