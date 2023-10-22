export default class AIcontrol {
    constructor(level = 'easy') {
        this.level = level;
        this.moves = this.buildMoveMap();


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
        let x=Math.floor(Math.random()*9);
        let y=Math.floor(Math.random()*9);
        return `${x},${y}`
    }

    findUnplayedSquare(square=this.randomSquare(), status) {
        status = this.moves.get(square.toString())
        if (status === 'unplayed') {
            return square;
        }
        else {
            return this.findUnplayedSquare();
        }
    }

    aimove() {
        let square = this.findUnplayedSquare();
        
    }
}
