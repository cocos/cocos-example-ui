import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;
import { MenuSidebar } from "./MenuSidebar";

@ccclass
export class MainMenu extends Component {
    @property(MenuSidebar)
    public sidebar: MenuSidebar | null = null;
    @property(Node)
    public roller: Node | null = null;
    public panelWidth = 0;
    public tabSwitchDuration = 0;

    public curPanelIdx = 0;

    // use this for initialization
    onLoad() {
        this.sidebar?.init(this);
        this.curPanelIdx = 0;
        const pos = this.roller?.position;
        if (pos != undefined) {
            this.roller?.setPosition(this.curPanelIdx * -this.panelWidth, pos.y, pos.z);
        }
    }

    switchPanel(idx: number) {
        this.curPanelIdx = idx;
    }
}


