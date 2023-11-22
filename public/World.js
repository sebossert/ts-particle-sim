import { Vector } from "./Vector.js";
export class World {
    nodes;
    filledPositions;
    constructor() {
        this.nodes = [];
        this.filledPositions = [];
    }
    update() {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].interact(this.nodes);
        }
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].collide(this.nodes);
        }
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].move();
        }
        // interact with other nodes
        // calculate collision
        // move
        // for (let i = 0; i < this.nodes.length; i++) {
        //     const node = this.nodes[i]
        //     this.move(node)
        // }
    }
    move(node) {
        const newPosition = new Vector(node.position.x + node.velocity.x, node.position.y + node.velocity.y);
        if (this.isPositionFilled(newPosition)) {
            console.error("Cannot move node to new position." + newPosition.string());
            node.velocity.x = 0;
            node.velocity.y = 0;
            return;
        }
        if (this.isPositionFilled(newPosition)) {
            console.error("Cannot move node to new position, after bounce." + newPosition.string());
            node.velocity.x = 0;
            node.velocity.y = 0;
            return;
        }
        this.filledPositions.shift(); // should work if called sequentially?
        node.move();
        this.filledPositions.push(newPosition.string());
    }
    addNode(node) {
        console.log('adding node');
        if (this.isPositionFilled(node.position)) {
            console.error('adding node failed');
            return false;
        }
        this.filledPositions.push(node.position.string());
        this.nodes.push(node);
        return true;
    }
    isPositionFilled(position) {
        return this.filledPositions.includes(position.string());
    }
}
