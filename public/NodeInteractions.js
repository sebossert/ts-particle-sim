import { NodeType } from "./NodeType.js";
import { NodeInteraction } from "./NodeInteraction.js";
export default {
    [NodeType.Red]: {
        [NodeType.Black]: NodeInteraction.None,
        [NodeType.White]: NodeInteraction.None,
        [NodeType.Red]: NodeInteraction.Pull,
        [NodeType.Green]: NodeInteraction.Push,
        [NodeType.Blue]: NodeInteraction.None,
    },
    [NodeType.Green]: {
        [NodeType.Black]: NodeInteraction.None,
        [NodeType.White]: NodeInteraction.None,
        [NodeType.Red]: NodeInteraction.None,
        [NodeType.Green]: NodeInteraction.Pull,
        [NodeType.Blue]: NodeInteraction.Push,
    },
    [NodeType.Blue]: {
        [NodeType.Black]: NodeInteraction.None,
        [NodeType.White]: NodeInteraction.None,
        [NodeType.Red]: NodeInteraction.Push,
        [NodeType.Green]: NodeInteraction.None,
        [NodeType.Blue]: NodeInteraction.Pull,
    },
    [NodeType.Black]: {
        [NodeType.Black]: NodeInteraction.Pull,
        [NodeType.White]: NodeInteraction.Push,
        [NodeType.Red]: NodeInteraction.None,
        [NodeType.Green]: NodeInteraction.None,
        [NodeType.Blue]: NodeInteraction.None,
    },
    [NodeType.White]: {
        [NodeType.Black]: NodeInteraction.Push,
        [NodeType.White]: NodeInteraction.Pull,
        [NodeType.Red]: NodeInteraction.None,
        [NodeType.Green]: NodeInteraction.None,
        [NodeType.Blue]: NodeInteraction.None,
    }
};
