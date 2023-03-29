// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    public jump(step: number) {
        if (step === 1) {
            cc.log('我跳了1步');
            console.log("jump 1 step");
        } else if (step === 2) {
            cc.log('我跳了2步');
            console.log("jump 2 step");
        }
    }

    public die() {
        cc.log('我死了');
    }

    start () {
        console.log("start player");
    }

    // update (dt) {}
}
