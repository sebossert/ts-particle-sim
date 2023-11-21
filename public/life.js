import { createLifeNodes } from './LifeNodeFactory.js'
import { NodeType } from './NodeType.js'
import { Config } from './Config.js'
import { World } from './World.js'

console.log('life.js loaded')

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d')
context.scale(1.5, 1.5);
const nodes = createLifeNodes(Config.width, Config.height, Config.nodeCount)
const world = new World()
for (let i = 0; i < nodes.length; i++) {
    if (!world.addNode(nodes[i])) {
        console.log('skipped node due to duplicate position. TODO')
    }
}
setInterval(update, 200)

/**
 * 
 * @param {CanvasRenderingContext2D } context 
 */
function updateCanvas(context) {
    context.clearRect(0, 0, 800, 800)
    for (let i = 0; i < world.nodes.length; i++) {
        const node = nodes[i]
        let fill = NodeType[node.nodeType]
        if (node.nodeType == NodeType.White) {
            fill = 'violet'
        }
        context.fillStyle = fill;
        context.strokeStyle = NodeType[node.nodeType];
        context.fillRect(node.position.x, node.position.y, 1, 1)
    }
}

function update() {
    world.update()
    updateCanvas(context)
}

export default nodes;