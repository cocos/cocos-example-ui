import { _decorator, Component, Node, eventManager } from "cc";
const { ccclass, property } = _decorator;
import { MenuSidebar } from "./MenuSidebar";

@ccclass
export class MainMenu extends Component{
    @property(MenuSidebar)
    public sidebar: MenuSidebar | null = null;
    @property(Node)
    public roller: Node | null= null;
    public panelWidth = 0;
    public tabSwitchDuration= 0;

    public curPanelIdx = 0;

    // use this for initialization
    onLoad() {
        this.sidebar.init(this);
        this.curPanelIdx = 0;
        const pos = this.roller.position;
        this.roller.setPosition(this.curPanelIdx * -this.panelWidth, pos.y, pos.z);
    }

    switchPanel(idx: number) {
        this.curPanelIdx = idx;
        // let newX = this.curPanelIdx * -this.panelWidth;
        // let rollerMove = cc.moveTo(this.tabSwitchDuration, cc.p(newX, 0)).easing(cc.easeQuinticActionInOut());
        // let callback = cc.callFunc(this.onSwitchPanelFinished, this);
        // this.roller.stopAllActions();
        eventManager.pauseTarget(this.roller);
        // this.roller.runAction(cc.sequence(rollerMove, callback));
    }

    onSwitchPanelFinished() {
        eventManager.resumeTarget(this.roller);
    }
}


