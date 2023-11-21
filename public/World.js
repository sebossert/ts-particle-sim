import { Config } from "./Config.js";
import { Position } from "./Position.js";
export class World {
    nodes;
    filledPositions;
    constructor() {
        this.nodes = [];
        this.filledPositions = [];
    }
    update() {
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            node.update(this.nodes);
        }
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            this.move(node);
        }
    }
    move(node) {
        const newPosition = new Position(node.position.x + node.movement.x, node.position.y + node.movement.y);
        if (this.isPositionFilled(newPosition)) {
            console.error("Cannot move node to new position." + newPosition);
            node.movement.x = 0;
            node.movement.y = 0;
            return;
        }
        if (newPosition.x < 0 || newPosition.x > Config.width) {
            newPosition.x = node.position.x + (-2) * node.movement.x;
        }
        if (newPosition.y < 0 || newPosition.y > Config.height) {
            newPosition.y = node.position.y + (-2) * node.movement.y;
        }
        if (this.isPositionFilled(newPosition)) {
            console.error("Cannot move node to new position, after bounce." + newPosition);
            node.movement.x = 0;
            node.movement.y = 0;
            return;
        }
        this.filledPositions.shift(); // should work if called sequentially?
        node.applyMovement();
        this.filledPositions.push(newPosition.string());
    }
    addNode(node) {
        console.log('adding node');
        if (this.isPositionFilled(node.position)) {
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
