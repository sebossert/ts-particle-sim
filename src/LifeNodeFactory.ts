import { NodeType } from "./NodeType.js";
import { Vector } from "./Vector.js";
import { LifeNode } from "./LifeNode.js";
import { Config } from "./Config.js";

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

function randomPosition(xMax: number, yMax: number): Vector {
    const pos = new Vector();
    pos.x = Math.floor(Math.random() * xMax)
    pos.y = Math.floor(Math.random() * yMax)
    return pos
}

function randomNodeType(): NodeType {
    const rand = Math.floor(Math.random() * Config.instance.blackChance);
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