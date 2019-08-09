import { _decorator, Component, AnimationComponent, ButtonComponent, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass
export class SubBtnsUI extends Component {
    @property(AnimationComponent)
    public subBtnsAnim: AnimationComponent | null = null;
    @property(ButtonComponent)
    public btnShowSub: ButtonComponent | null = null;
    @property(ButtonComponent)
    public btnHideSub: ButtonComponent | null = null;
    @property(Node)
    public btnContainer: Node | null = null;

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

    onFinishAnim(finishFold) {
        this.btnShowSub.node.active = finishFold;
        this.btnHideSub.node.active = !finishFold;
    }
}
