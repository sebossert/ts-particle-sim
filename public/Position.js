export class Position {
    x = 0;
    y = 0;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    string() {
        return this.x + ',' + this.y;
    }
}
