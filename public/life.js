import { createLifeNodes } from './LifeNodeFactory.js'
import { NodeType } from './NodeType.js'
import { Config } from './Config.js'
import { World } from './World.js'
import { SimpleForm } from './simple-form.js'
import NodeInteractions from './NodeInteractions.js'

console.log('life.js loaded')

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d')
context.save()
let interval;
var world;
let clearRectX, clearRectY;

function init() {
    context.restore()
    if(interval) {
        clearInterval(interval)
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.scale(Config.instance.canvasScale, Config.instance.canvasScale);
        context.clearRect(0, 0, canvas.width, canvas.height);
        clearRectX = canvas.width / Config.instance.canvasScale
        clearRectY = canvas.height / Config.instance.canvasScale
    }
    let nodes = createLifeNodes(Config.instance.width, Config.instance.height, Config.instance.nodeCount)
    world = new World()
    for (let i = 0; i < nodes.length; i++) {
        if (!world.addNode(nodes[i])) {
            console.log('skipped node due to duplicate position. TODO')
        }
    }
    interval = setInterval(update, Config.instance.refreshRate)
}

/**
 * 
 * @param {CanvasRenderingContext2D } context 
 */
function updateCanvas(context) {
    if(Config.instance.clearRect == true || Config.instance.clearRect == 'true') {        
        context.clearRect(0, 0, clearRectX, clearRectY);
    }
    for (let i = 0; i < world.nodes.length; i++) {
        const node = world.nodes[i]
        let fill = NodeType[node.nodeType]
        if (node.nodeType == NodeType.White) {
            // fill = 'violet'
        }
        context.fillStyle = fill;
        // context.strokeStyle = NodeType[node.nodeType];
        context.fillRect(node.position.x, node.position.y, 1, 1)
    }
}

function update() {
    world.update()
    updateCanvas(context)
}

const form = new SimpleForm(document)
document
    .getElementById("simple-form")
    .appendChild(form.createFieldset("config", Config.instance))
document
    .getElementById("simple-form")
    .appendChild(form.createFieldset("interactions", NodeInteractions))

document.getElementById('reset').addEventListener('click', init)

init()

export default world;