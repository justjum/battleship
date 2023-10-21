import Ship from './ship'

export default class Gameboard {
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

    checkSpace(length, xpos, ypos) {
        for (let x=1; x<=length; x++) {
            let status = this.board.get(`${xpos},${ypos}`);
            if (status === undefined) {
                return 'off board'
            }
            else if (status === 'empty') {
                xpos++;
            }
            else {
                return `vessel`
            }
            
        }
        return 'empty';
    }

    placeShipHor(name, length, xpos, ypos) {
        let space = this.checkSpace(length, xpos, ypos);
        if (space) {
            for (let x=1; x<=length; x++) {
                this.board.set(`${xpos},${ypos}`, name);
                xpos++;
            } 
        }
    } 

    placeShipVer(name, length, xpos, ypos) {
        let space = this.checkSpace(length, xpos, ypos);
        if (space === 'empty') {
            for (let x=1; x<=length; x++) {
                this.board.set(`${xpos},${ypos}`, name);
                ypos++;
            }
        }          
    }
     
    receiveAttack(xpos, ypos) {
        let space = this.checkSpace(1, xpos, ypos);
        if (space === 'empty') {
            this.board.set(`${xpos},${ypos}`, 'miss');
        }
        else if (space === 'vessel') {
            this.board.set(`${xpos},${ypos}`, 'hit')
        }
    }
    

}

const game = new Gameboard();





