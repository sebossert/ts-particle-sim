export class Config {
    static instance = new Config();
    width = 300;
    height = 300;
    nodeCount = 2000;
    blackChance = 30;
    refreshRate = 10;
    canvasScale = 1;
    clearRect = false;
    terminalVelocity = 10; // 29.9792458
    g = 0.00067; //Math.pow(6.67408, -4)
    constructor() {
    }
}
