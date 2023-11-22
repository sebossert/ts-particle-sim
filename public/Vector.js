export class Vector {
    x = 0;
    y = 0;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    size() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    string() {
        return this.x + ',' + this.y;
    }
    equals(vector) {
        return this.x == vector.x && this.y == vector.y;
    }
    static add(a, b) {
        return new Vector(a.x + b.x, a.y + b.y);
    }
}
