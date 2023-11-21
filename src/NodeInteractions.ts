import { NodeType } from "./NodeType.js"
import { NodeInteraction } from "./NodeInteraction.js"

export default {
    [NodeType.Red]: {
        [NodeType.Green]: NodeInteraction.Push,
        [NodeType.Blue]: NodeInteraction.None,
        [NodeType.Red]: NodeInteraction.Pull,
        [NodeType.Black]: NodeInteraction.None,
        [NodeType.White]: NodeInteraction.None
    },
    [NodeType.Green]: {
        [NodeType.Blue]: NodeInteraction.Push,
        [NodeType.Red]: NodeInteraction.None,
        [NodeType.Green]: NodeInteraction.Pull,
        [NodeType.Black]: NodeInteraction.None,
        [NodeType.White]: NodeInteraction.None
    },
    [NodeType.Blue]: {
        [NodeType.Red]: NodeInteraction.Push,
        [NodeType.Blue]: NodeInteraction.None,
        [NodeType.Green]: NodeInteraction.Pull,
        [NodeType.Black]: NodeInteraction.None,
        [NodeType.White]: NodeInteraction.None
    },
    [NodeType.Black]: {
        [NodeType.Black]: NodeInteraction.Pull,
        [NodeType.White]: NodeInteraction.Push,
        [NodeType.Red]: NodeInteraction.None,
        [NodeType.Blue]: NodeInteraction.None,
        [NodeType.Green]: NodeInteraction.None
    },
    [NodeType.White]: {
        [NodeType.Black]: NodeInteraction.Push,
        [NodeType.White]: NodeInteraction.Pull,
        [NodeType.Red]: NodeInteraction.None,
        [NodeType.Blue]: NodeInteraction.None,
        [NodeType.Green]: NodeInteraction.None
    }
}