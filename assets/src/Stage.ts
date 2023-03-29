// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from './Game';
import Player from './Player';

const {ccclass, property} = cc._decorator;

@ccclass
export default class Stage extends cc.Component {

    @property(cc.Integer)
    private stepDistance: number = 200;

    @property(cc.Integer)
    private jumpHeight: number = 100;

    @property(cc.Float)
    private jumpDuration: number = 0.3;

    @property(Player)
    private player: Player = null;

    private game: Game = null;

    public init(game: Game) {
        this.game = game;
        this.player.init(this.stepDistance, this.jumpHeight, this.jumpDuration);
    }

    public playerJump(step: number) {
        console.log("player jump");
        if (this.player.canJump) {
            this.player.jump(step);
        }
    }

    start () {

    }

    // update (dt) {}
}
