import { _decorator, Component, Sprite, Node, Animation, SpriteFrame } from "cc";
import { MenuSidebar } from "./MenuSidebar";
const { ccclass, property } = _decorator;

export interface ITabCtrlInfo{
    sidebar: MenuSidebar;
    idx: number;
    iconSF: SpriteFrame;
}

@ccclass
export class TabCtrl extends Component {
    @property
    public idx = 0;
    @property(Sprite)
    public icon: Sprite | null = null;
    @property(Node)
    public arrow: Node | null = null;
    @property(Animation)
    public anim: Animation | null = null;

    public sidebar: MenuSidebar | null = null;

    // use this for initialization
    init(tabInfo: ITabCtrlInfo) { // sidebar, idx, iconSF
        this.sidebar = tabInfo.sidebar;
        this.idx = tabInfo.idx;
        this.icon.spriteFrame = tabInfo.iconSF;
        this.node.on('touchstart', this.onPressed.bind(this), this.node);
        this.arrow.scale = cc.p(0, 0);
    }

    onPressed() {
        this.sidebar.tabPressed(this.idx);
    }

    turnBig() {
        this.anim.play('tab_turn_big');
    }

    turnSmall() {
        this.anim.play('tab_turn_small');
    }
}
