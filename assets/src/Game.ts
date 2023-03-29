// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Stage from "./Stage";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property(Stage)
    private stage: Stage = null;
    @property(cc.Label)
    private scoreLabel: cc.Label = null;

    private score: number = 0;

    protected start() {
        this.startGame();
    }

    public addScore(n: number) {
        this.score += n;
        this.scoreLabel.string = this.score + '';
    }

    public startGame() {
        this.score = 0;
        this.scoreLabel.string = '0';
        this.stage.init(this);
    }

    public overGame() {
        cc.log('game over');
    }

    public restartGame() {
        cc.director.loadScene('game');
    }

    public returnMenu() {
        cc.director.loadScene('menu');
    }

    private onBtnOne() {
        this.stage.playerJump(1);
    }

    private onBtnTwo() {
        this.stage.playerJump(2);
    }
}
