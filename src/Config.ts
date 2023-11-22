export class Config {
    static instance = new Config()

    width: number = 300
    height: number = 300
    nodeCount: number = 2000
    blackChance: number = 30
    refreshRate: number = 10
    canvasScale: number = 1
    clearRect: boolean = false
    terminalVelocity: number = 10 // 29.9792458
    g: number = 0.00067 //Math.pow(6.67408, -4)
    private constructor() {

    }
}