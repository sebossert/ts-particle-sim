import { NodeType } from "./NodeType.js";
import { Position } from "./Position.js";
import { LifeNode } from "./LifeNode.js";

export function createLifeNodes(xMax: number, yMax: number, nodeCount: number) {
    const nodes = []
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(createLifeNode(xMax, yMax))
    }
    return nodes;
}

export function createLifeNode(xMax: number, yMax: number): LifeNode {
    return new LifeNode(randomNodeType(), randomPosition(xMax, yMax))
}

function randomPosition(xMax: number, yMax: number): Position {
    const pos = new Position();
    pos.x = Math.floor(Math.random() * xMax)
    pos.y = Math.floor(Math.random() * yMax)
    return pos
}

function randomNodeType(): NodeType {
    const rand = Math.floor(Math.random() * 4);
    if (rand > 3) {
        return NodeType.Black
    }
    else if (rand > 2) {
        return NodeType.White
    }
    else if (rand > 1) {
        return NodeType.Red
    }
    else if (rand > 0) {
        return NodeType.Blue
    } else {
        return NodeType.Green;
    }
}