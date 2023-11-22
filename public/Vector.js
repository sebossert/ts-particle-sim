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
        return Math.round(this.x) == Math.round(vector.x) && Math.round(this.y) == Math.round(vector.y);
    }
    resize(newSize) {
        const factor = newSize / this.size();
        this.x *= factor;
        this.y *= factor;
    }
    static add(a, b) {
        return new Vector(a.x + b.x, a.y + b.y);
    }
}
