import { _decorator, Component, Node, Animation, Enum, eventManager } from "cc";
const { ccclass, property } = _decorator;
import { BackPackUI } from "./BackPackUI";
import { ShopUI } from "./ShopUI";
import { ChallengeUI } from "./ChallengeUI";
import { PanelType } from "./PanelType";

@ccclass
export class HomeUI extends Component {
    @property(Animation)
    menuAnim: Animation = null!;
    @property([Node])
    homeBtnGroups: Node[] = [];
    @property(BackPackUI)
    backPackUI: BackPackUI = null!;
    @property(ShopUI)
    shopUI: ShopUI = null!;
    @property(ChallengeUI)
    challengeUI: ChallengeUI = null!;

    public curPanel = PanelType.Home;

    // use this for initialization
    onLoad() {
        this.curPanel = PanelType.Home;
        // this.menuAnim.play('menu_reset');
    }

    start() {
        this.backPackUI.init(this);
        this.shopUI.init(this, PanelType.Shop);
        this.challengeUI.init(this);
        this.scheduleOnce(() => {
            this.menuAnim.play('menu_intro');
        }, 0.5);
    }

    toggleHomeBtns(enable: boolean) {
        for (let i = 0; i < this.homeBtnGroups.length; ++i) {
            let group = this.homeBtnGroups[i];
            if (!enable) {
                eventManager.pauseTarget(group, true);
            } else {
                eventManager.resumeTarget(group, true);
            }
        }
    }

    gotoShop() {
        if (this.curPanel !== PanelType.Shop) {
            this.shopUI.show();
        }
    }

    gotoHome() {
        if (this.curPanel === PanelType.Shop) {
            this.shopUI.hide();
            this.curPanel = PanelType.Home;
        }
    }
}
