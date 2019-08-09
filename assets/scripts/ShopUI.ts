
import { _decorator, Component, SpriteComponent, Node, AnimationComponent } from "cc";
const { ccclass, property } = _decorator;
import { HomeUI, PanelType } from "./HomeUI";
import { ChargeUI } from "./ChargeUI";

@ccclass
export class ShopUI extends Component {
    @property(AnimationComponent)
    public anim: AnimationComponent | null = null;
    @property(SpriteComponent)
    public figure: SpriteComponent | null = null;
    @property(Node)
    public btnsNode: Node | null = null;
    @property(ChargeUI)
    public chargeUI: ChargeUI | null = null;

    private _panelType = PanelType.Home;
    private _home: HomeUI | null = null;

    // use this for initialization
    init(home: HomeUI, panelType: PanelType) {
        this._home = home;
        this.node.active = false;
        this.anim.play('shop_reset');
        this._panelType = panelType;
        // this.figure.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1, 0.96), cc.scaleTo(1, 1, 1))));
        this.chargeUI.init(home, this.btnsNode);
    }

    show() {
        this.node.active = true;
        this.anim.play('shop_intro');
    }

    hide() {
        this.anim.play('shop_outro');
    }

    onFinishShow() {
        this._home.curPanel = this._panelType;
    }

    onFinishHide() {
        this.node.active = false;
    }
}
