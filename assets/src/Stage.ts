// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from './Game';
import Player from './Player';
import Block from './Block';

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

    @property(cc.Prefab)
    private blockPrefab: cc.Prefab = null; // 编辑器属性引用

    private lastBlock = true; // 记录上一次是否添加了Block
    private lastBlockX = 0; // 记录上一次添加Block的x坐标
    private blockList: Array<Block>; // 记录添加的Block列表

    private game: Game = null;

    public init(game: Game) {
        this.game = game;
        this.player.init(this.stepDistance, this.jumpHeight, this.jumpDuration);

        this.blockList = [];
        this.addBlock(cc.v3(0, 0));
        for (let i = 0; i < 5; i++) {
            this.randomAddBlock();
        }
    }

    public playerJump(step: number) {
        if (this.player.canJump) {
            this.player.jump(step);
            this.moveStage(step);
            let isDead = !this.hasBlock(this.player.index);
            if (isDead) {
                cc.log('die');
                this.game.overGame();
            } else {
                this.game.addScore(step === 1 ? 1 : 3); // 跳一步得一分，跳两步的三分
            }
        }
    }

    private moveStage(step: number) {
        let moveAction = cc.moveBy(this.jumpDuration, cc.v2(-this.stepDistance * step, 0));
        this.node.runAction(moveAction);
        for (let i = 0; i < step; i++) {
            this.randomAddBlock();
        }
    }

    private randomAddBlock() {
        if (!this.lastBlock || Math.random() > 0.5) {
            this.addBlock(cc.v3(this.lastBlockX + this.stepDistance, 0));
        } else {
            this.addBlank();
        }
        this.lastBlockX = this.lastBlockX + this.stepDistance;
    }

    private addBlock(position: cc.Vec3) {
        let blockNode = cc.instantiate(this.blockPrefab);
        this.node.addChild(blockNode);
        blockNode.position = position;
        this.blockList.push(blockNode.getComponent(Block));
        this.lastBlock = true;
    }

    private addBlank() {
        this.blockList.push(null);
        this.lastBlock = false;
    }

    private hasBlock(index: number): boolean {
        return this.blockList[index] !== null;
    }
}
