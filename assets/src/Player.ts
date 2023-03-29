// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    private stepDistance: number; // 一步跳跃距离
    private jumpHeight: number; // 跳跃高度
    private jumpDuration: number; // 跳跃持续时间
    public canJump: boolean; // 此时是否能跳跃

    public init(stepDistance: number, jumpHeight: number, jumpDuration: number) {
        this.stepDistance = stepDistance;
        this.jumpHeight = jumpHeight;
        this.jumpDuration = jumpDuration;
        this.canJump = true;
    }

    public jump(step: number) {
        if (step === 1) {
            cc.log('我跳了1步');
            console.log("jump 1 step");
        } else if (step === 2) {
            cc.log('我跳了2步');
            console.log("jump 2 step");
        }

        this.canJump = false;
        // this.index += step;
        let jumpAction = cc.jumpBy(this.jumpDuration, cc.v2(step * this.stepDistance, 0), this.jumpHeight, 1);
        let finishAction = cc.callFunc(() => {
            this.canJump = true;
        });
        this.node.runAction(cc.sequence(jumpAction, finishAction));
    }

    public die() {
        cc.log('我死了');
    }

    start () {
        console.log("start player");
    }

    // update (dt) {}
}
