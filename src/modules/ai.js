import { game } from ".";

export default class AIcontrol {
    constructor(level = 'easy') {
        this.level = level;
        this.moves = this.buildMoveMap();
        this.placeFleet();

    }

    placeFleet(fleet=5, index=0, length=5) {
        while (fleet>0) {
            console.log('aiplacing')
            let y = this.randomInteger();
            let z = this.randomInteger();
            let orient = this.randomOrient();
            if (game.ai.gameboard.placeShip(index, length, y, z, orient) !== 'block') {
                game.ai.gameboard.placeShip(index, length, y, z, orient);
                fleet--;
                index++;
                length--;

            }
        }
    }

    buildMoveMap() {
        let moveMap = new Map();
        for (let x=0; x<10; x++) {
            for (let y=0; y<10; y++) {
                moveMap.set([x,y].toString(),'unplayed');
            }
        }
        return moveMap;
    }

    randomSquare() {
        let x=Math.floor(Math.random()*10);
        let y=Math.floor(Math.random()*10);
        return `${x},${y}`
    }

    randomInteger() {
        return Math.floor(Math.random()*10);
    }

    randomOrient() {
        let x=Math.floor(Math.random()*2);
        return x>0 ? true : false;
    }

    findUnplayedSquare(checked = new Map, square=this.randomSquare(), status) {
        status = this.moves.get(square.toString())
        if (status === 'unplayed') {
            return square;
        }
        else if (checked.get(square.toString() === 'checked')) {
            alert('this')
            return;
        }
        else {
            checked.set(square.toString(), 'checked');
            console.log(checked);
            return this.findUnplayedSquare(checked);
        }
    }

    aimove() {
        let square = this.findUnplayedSquare();
        return square;
    }
}
