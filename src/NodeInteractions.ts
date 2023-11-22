import { Config } from "./Config.js"
import { NodeType } from "./NodeType.js"

export default {
    [NodeType.Red]: {
        [NodeType.Black]: 0,
        [NodeType.White]: 0,
        [NodeType.Red]: 2*Config.instance.g,
        [NodeType.Green]: Config.instance.g,
        [NodeType.Blue]: -Config.instance.g,
    },
    [NodeType.Green]: {
        [NodeType.Black]: 0,
        [NodeType.White]: 0,
        [NodeType.Red]: -Config.instance.g,
        [NodeType.Green]: 2*Config.instance.g,
        [NodeType.Blue]: Config.instance.g,
    },
    [NodeType.Blue]: {
        [NodeType.Black]: 0,
        [NodeType.White]: 0,
        [NodeType.Red]: Config.instance.g,
        [NodeType.Green]: -Config.instance.g,
        [NodeType.Blue]: 2*Config.instance.g,
    },
    [NodeType.Black]: {
        [NodeType.Black]: Config.instance.g,
        [NodeType.White]: 0,
        [NodeType.Red]: 0,
        [NodeType.Green]: 0,
        [NodeType.Blue]: 0,
    },
    [NodeType.White]: {
        [NodeType.Black]: -Config.instance.g,
        [NodeType.White]: Config.instance.g,
        [NodeType.Red]: 0,
        [NodeType.Green]: 0,
        [NodeType.Blue]: 0,
    }
}