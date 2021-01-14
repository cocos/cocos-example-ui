import { _decorator, Component, Animation, Button, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass
export class SubBtnsUI extends Component {
    @property(Animation)
    public subBtnsAnim: Animation = null!;
    @property(Button)
    public btnShowSub: Button = null!;
    @property(Button)
    public btnHideSub: Button = null!;
    @property(Node)
    public btnContainer: Node = null!;

    // use this for initialization
    onLoad() {
        this.btnShowSub.node.active = true;
        this.btnHideSub.node.active = false;
    }

    showSubBtns() {
        this.btnContainer.active = true;
        this.subBtnsAnim.play('sub_pop');
    }

    hideSubBtns() {
        this.subBtnsAnim.play('sub_fold');
    }

    onFinishAnim(finishFold: boolean) {
        this.btnShowSub.node.active = finishFold;
        this.btnHideSub.node.active = !finishFold;
    }
}
