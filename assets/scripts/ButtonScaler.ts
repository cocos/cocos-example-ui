import { _decorator, Component, Vec3, ButtonComponent} from "Cocos3D";
const { ccclass, property } = _decorator;

@ccclass
export class ButtonScaler extends Component {
    @property
    public pressedScale = 1;
    @property
    public transDuration = 0;

    public initScale = new Vec3();
    public button: ButtonComponent | null = null;

    // use this for initialization
    onLoad() {
        var self = this;
        self.initScale = this.node.scale;
        self.button = self.getComponent(ButtonComponent);
        // self.scaleDownAction = cc.scaleTo(self.transDuration, self.pressedScale);
        // self.scaleUpAction = cc.scaleTo(self.transDuration, self.initScale);
        function onTouchDown(event) {
            // this.stopAllActions();
            // this.runAction(self.scaleDownAction);
        }
        function onTouchUp(event) {
            // this.stopAllActions();
            // this.runAction(self.scaleUpAction);
        }
        this.node.on('touchstart', onTouchDown, this.node);
        this.node.on('touchend', onTouchUp, this.node);
        this.node.on('touchcancel', onTouchUp, this.node);
    }
}
