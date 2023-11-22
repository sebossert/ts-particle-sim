import { Config } from "./Config.js";
import { NodeType } from "./NodeType.js";
export default {
    [NodeType.Red]: {
        [NodeType.Black]: 0,
        [NodeType.White]: 0,
        [NodeType.Red]: Config.g,
        [NodeType.Green]: -Config.g,
        [NodeType.Blue]: 0,
    },
    [NodeType.Green]: {
        [NodeType.Black]: 0,
        [NodeType.White]: 0,
        [NodeType.Red]: 0,
        [NodeType.Green]: Config.g,
        [NodeType.Blue]: -Config.g,
    },
    [NodeType.Blue]: {
        [NodeType.Black]: 0,
        [NodeType.White]: 0,
        [NodeType.Red]: -Config.g,
        [NodeType.Green]: 0,
        [NodeType.Blue]: Config.g,
    },
    [NodeType.Black]: {
        [NodeType.Black]: Config.g,
        [NodeType.White]: 0,
        [NodeType.Red]: 0,
        [NodeType.Green]: 0,
        [NodeType.Blue]: 0,
    },
    [NodeType.White]: {
        [NodeType.Black]: 0,
        [NodeType.White]: Config.g,
        [NodeType.Red]: 0,
        [NodeType.Green]: 0,
        [NodeType.Blue]: 0,
    }
};
