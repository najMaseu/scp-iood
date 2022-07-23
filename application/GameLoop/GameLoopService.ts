export class GameLoopService {
  private static instance: GameLoopService;
  private _toBeRunEachLoop: Function[] = [];

  constructor() {
    this.loop = this.loop.bind(this);
    this.addToLoop = this.addToLoop.bind(this);
    this.clearLoop = this.clearLoop.bind(this);
  }

  public static getInstance(): GameLoopService {
    if (!GameLoopService.instance) {
      GameLoopService.instance = new GameLoopService();
    }

    return GameLoopService.instance;
  }

  public addToLoop(newLoopElement: Function) {
    this.toBeRunEachLoop.push(newLoopElement);
  }

  public clearLoop() {
    this.toBeRunEachLoop = [];
  }

  private get toBeRunEachLoop(): Function[] {
    return this._toBeRunEachLoop;
  }

  private set toBeRunEachLoop(value: Function[]) {
    this._toBeRunEachLoop = value;
  }

  public loop() {
    this.toBeRunEachLoop.forEach((el) => el());
    requestAnimationFrame(this.loop);
  }
}
