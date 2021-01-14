import { _decorator, Component, Node, SystemEventType, EventTouch, Vec3 } from "cc";
import { HomeUI } from "./HomeUI";
const { ccclass, property } = _decorator;

@ccclass("ChallengeUI")
export class ChallengeUI extends Component {
    public home: HomeUI = null!;
    @property(Node)
    roleClkArea: Node = null!;
    @property(Node)
    role: Node = null!;

    private _rot = new Vec3();

    start () {
        // Your initialization goes here.
    }

    init(home: HomeUI) {
        this.home = home;
        this.roleClkArea.on(SystemEventType.TOUCH_MOVE, this._rotateRole, this);
        this._rot.set(this.role.eulerAngles);
    }

    show() {
        this.node.active = true;
        this.node.emit('fade-in');
        this.home.toggleHomeBtns(false);
    }

    hide() {
        this.node.active = false;
        this.node.emit('fade-out');
        this.home.toggleHomeBtns(true);
    }

    _rotateRole(event: EventTouch){
        const y = event.getDeltaX();
        if(y > 0){
            this._rot.y += 5;
        } else if (y < 0){
            this._rot.y -= 5;
        }

        this.role.eulerAngles = this._rot;
        this._rot.set(this.role.eulerAngles);
    }
}
