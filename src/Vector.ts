export class Vector {
    x: number = 0;
    y: number = 0;
    constructor(x: number = 0, y: number = 0) {
        this.x = x
        this.y = y
    }
    size(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    add(vector: Vector) {
        this.x += vector.x
        this.y += vector.y
    }
    string(): string {
        return this.x + ',' + this.y
    }
    equals(vector: Vector): boolean {
        return Math.round(this.x) == Math.round(vector.x) && Math.round(this.y) == Math.round(vector.y);
    }
    resize(newSize: number) {
        const factor = newSize / this.size()
        this.x *= factor
        this.y *= factor
    }
    static add(a: Vector, b: Vector): Vector {
        return new Vector(
            a.x + b.x,
            a.y + b.y
        )
    }
}