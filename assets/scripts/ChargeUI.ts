import { _decorator, Component, Node } from "cc";
const { ccclass } = _decorator;
import { HomeUI } from "./HomeUI";

@ccclass
export class ChargeUI extends Component {
    public home: HomeUI = null!;
    public parentBtns: Node = null!;
    init(home: HomeUI, parentBtns: Node) {
        this.home = home;
        this.parentBtns = parentBtns;
    }

    show() {
        this.node.active = true;
        this.node.emit('fade-in');
    }

    hide() {
        this.node.active = false;
        this.node.emit('fade-out');
    }
}
