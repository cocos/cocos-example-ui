import { _decorator, Component, eventManager, Node } from "cc";
const { ccclass } = _decorator;
import { HomeUI } from "./HomeUI";

@ccclass
export class ChargeUI extends Component {
    public home: HomeUI | null = null;
    public parentBtns: Node | null = null;
    init(home: HomeUI, parentBtns: Node) {
        this.home = home;
        this.parentBtns = parentBtns;
    }

    show() {
        this.node.active = true;
        this.node.emit('fade-in');
        this.home.toggleHomeBtns(false);
        eventManager.pauseTarget(this.parentBtns);
    }

    hide() {
        this.node.active = false;
        this.node.emit('fade-out');
        this.home.toggleHomeBtns(true);
        eventManager.resumeTarget(this.parentBtns);
    }
}
