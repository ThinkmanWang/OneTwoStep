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

    @property(Player)
    private player: Player = null;

    private game: Game = null;

    public init(game: Game) {
        this.game = game;
    }

    public playerJump(step: number) {
        console.log("player jump");
        this.player.jump(step);
    }

    start () {

    }

    // update (dt) {}
}
