import { Vector } from "./Vector.js";
import nodeInteractions from "./NodeInteractions.js";
import { Config } from "./Config.js";
export class LifeNode {
    nodeType;
    position;
    velocity;
    constructor(nodeType, position) {
        this.nodeType = nodeType;
        this.position = position;
        this.velocity = new Vector();
    }
    interact(nodes) {
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (this === node)
                break;
            const interaction = nodeInteractions[this.nodeType][node.nodeType];
            if (interaction !== 0) {
                node.velocity.x += interaction * getDeltaXModifier(this, node);
                node.velocity.y += interaction * getDeltaYModifier(this, node);
            }
        }
    }
    collide(nodes) {
        const nextPosition = this.nextPosition();
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (this === node)
                break;
            if (this.nodeType == node.nodeType && nextPosition.equals(node.nextPosition())) {
                const newVelocity = Vector.add(this.velocity, node.velocity);
                node.velocity.add(this.velocity);
                this.velocity = newVelocity;
            }
        }
        if (nextPosition.x < 0) {
            this.velocity.x = Math.abs(this.velocity.x);
        }
        else if (nextPosition.x > Config.instance.width) {
            this.velocity.x = -Math.abs(this.velocity.x);
        }
        if (nextPosition.y < 0) {
            this.velocity.y = Math.abs(this.velocity.y);
        }
        else if (nextPosition.y > Config.instance.height) {
            this.velocity.y = -Math.abs(this.velocity.y);
        }
    }
    nextPosition() {
        if (this.velocity.size() > Config.instance.terminalVelocity) {
            this.velocity.resize(Config.instance.terminalVelocity);
        }
        return new Vector(this.position.x + this.velocity.x, this.position.y + this.velocity.y);
    }
    move() {
        this.position = this.nextPosition();
        // this.velocity.x = 0; this.velocity.y = 0;
    }
}
function getDeltaXModifier(source, target) {
    if (source.position.x > target.position.x) {
        return 1;
    }
    else if (source.position.x < target.position.x) {
        return -1;
    }
    return 0;
}
function getDeltaYModifier(source, target) {
    if (source.position.y > target.position.y) {
        return 1;
    }
    else if (source.position.y < target.position.y) {
        return -1;
    }
    return 0;
}
