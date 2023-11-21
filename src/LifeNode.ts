import { NodeType } from "./NodeType.js";
import { Position } from "./Position.js";
import nodeInteractions from "./NodeInteractions.js"
import { NodeInteraction } from "./NodeInteraction.js";
import { Config } from "./Config.js";

export class LifeNode {
    nodeType: NodeType;
    position: Position;
    movement: Position;
    constructor(nodeType: NodeType, position: Position) {
        this.nodeType = nodeType;
        this.position = position;
        this.movement = new Position()
    }
    update(nodes: LifeNode[]) {
        for (let i = 0; i < nodes.length; i++) {
            this.interact(nodes[i]);
        }
    }
    interact(node: LifeNode) {
        if (this === node) {
            return;
        }
        let interaction = nodeInteractions[this.nodeType][node.nodeType];

        switch (interaction) {
            case NodeInteraction.Pull:
                this.pull(node);
                break;
            case NodeInteraction.Push:
                this.push(node);
                break;
        }
    }
    push(node: LifeNode): void {
        node.movement.x -= getDeltaX(this, node);
        node.movement.y -= getDeltaY(this, node);
    }
    pull(node: LifeNode): void {
        node.movement.x += getDeltaX(this, node);
        node.movement.y += getDeltaY(this, node);
    }
    applyMovement(): void {
        this.position.x = Math.min(Config.width, Math.max(0, this.position.x + this.movement.x))
        this.position.y = Math.min(Config.height, Math.max(0, this.position.y + this.movement.y))
        this.movement.x = 0; this.movement.y = 0;
    }
}

function getDeltaX(source: LifeNode, target: LifeNode): number {
    if (source.position.x > target.position.x) {
        return 1;
    }
    else if (source.position.x < target.position.x) {
        return -1;
    }
    return 0;
}

function getDeltaY(source: LifeNode, target: LifeNode): number {
    if (source.position.y > target.position.y) {
        return 1;
    }
    else if (source.position.y < target.position.y) {
        return -1;
    }
    return 0;
}