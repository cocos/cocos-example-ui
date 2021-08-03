import { _decorator, Component, Vec3, Color, UIRenderable } from "cc";
const { ccclass, property } = _decorator;

@ccclass
export class PanelTransition extends Component {
    @property
    public duration = 0;

    public outOfWorld = new Vec3();

    private _color = new Color();

     // use this for initialization
    onLoad() {
        this.outOfWorld = new Vec3(3000, 0, 0);
        this.node.setPosition(this.outOfWorld);
        // let cbFadeOut = cc.callFunc(this.onFadeOutFinish, this);
        // let cbFadeIn = cc.callFunc(this.onFadeInFinish, this);
        // this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.duration, 255), cc.scaleTo(this.duration, 1.0)), cbFadeIn);
        // this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.duration, 0), cc.scaleTo(this.duration, 2.0)), cbFadeOut);
        this.node.on('fade-in', this.startFadeIn, this);
    }

    startFadeIn() {
        this.node.setPosition(0, 0, 0);
        this.node.setScale(2, 2, 2);
        const renderComp = this.node.getComponent(UIRenderable)!;
        this._color.set(renderComp.color);
        this._color.a = 0;
        renderComp.color = this._color;
        // this.node.runAction(this.actionFadeIn);
    }

    onFadeOutFinish() {
        this.node.setPosition(this.outOfWorld);
    }
}
