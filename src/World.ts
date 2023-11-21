import { LifeNode } from "./LifeNode.js";
import { Position } from "./Position.js";

export class World {
    nodes: LifeNode[];
    filledPositions: boolean[][];
    constructor() {
        this.nodes = [];
        this.filledPositions = []
    }
    update() {
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i]
            node.update(this.nodes)
        }
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i]
            node.applyMovement()
        }
    }
    move(node: LifeNode) {
        const newPosition = {
            x: node.position.x + node.movement.x,
            y: node.position.y + node.movement.y,
        }
        if (this.isPositionFilled(newPosition)) {
            console.error("Cannot move node to new position." + newPosition)
            return
        }
        this.createFilledPositionsAsRequired(node.position);
        this.filledPositions[node.position.x][node.position.y] = false;
        node.applyMovement();
        this.filledPositions[node.position.x][node.position.y] = true;
    }
    addNode(node: LifeNode) {
        if (this.isPositionFilled(node.position)) {
            return false;
        }
        this.createFilledPositionsAsRequired(node.position);
        this.filledPositions[node.position.x][node.position.y] = true;
        this.nodes.push(node)
        return true
    }
    createFilledPositionsAsRequired(position: Position) {
        while (this.filledPositions[position.x] === undefined) {
            this.filledPositions.push([])
        }
        for (let i = this.filledPositions[position.x].length; i < position.y; i++) {
            if (this.filledPositions[position.x][i] === undefined) {
                this.filledPositions[position.x].push(false)
            }
        }
    }
    isPositionFilled(position: Position): boolean {
        if (this.filledPositions[position.x] === undefined) {
            return false;
        }
        else if (this.filledPositions[position.x][position.y] === undefined) {
            return false; // space already filled
        }
        else {
            return this.filledPositions[position.x][position.y];
        }
    }
}