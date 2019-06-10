// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // main character's jump height
        jumpHeight: 0,
        // main character's jump duration
        jumpDuration: 0,
        // maximal movement speed
        maxMoveSpeed: 0,
        // acceleration
        accel: 0,
    },

    setJumpAction: function () {
        // jump up
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // jump down
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        //  repeat
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        // initialize jump action
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    },

    start () {

    },

    // update (dt) {},
});
