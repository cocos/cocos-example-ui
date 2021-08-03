import { _decorator, Component, SpriteFrame, Prefab, Node } from "cc";
import { TabCtrl } from "./TabCtrl";
import { MainMenu } from "./MainMenu";
const { ccclass, property } = _decorator;

@ccclass
export class MenuSidebar extends Component{
    @property([SpriteFrame])
    public tabIcons: SpriteFrame[] = [];
    @property(Prefab)
    public tabPrefab:Prefab | null = null;
    @property(Node)
    public container: Node | null = null;
    @property(Node)
    public highlight: Node | null = null;
    @property
    public tabWidth = 0;

    public curTabIdx = -1;
    public tabs: TabCtrl[] = [];
    public mainMenu: MainMenu | null = null;
    public tabSwitchDuration = -1;

    // use this for initialization
    init(mainMenu: MainMenu) {
        this.mainMenu = mainMenu;
        this.tabSwitchDuration = mainMenu.tabSwitchDuration;
        this.curTabIdx = 0;
        this.tabs = [];
        for (let i = 0; i < this.tabIcons.length; ++i) {
            let iconSF = this.tabIcons[i];
            let tab = cc.instantiate(this.tabPrefab).getComponent(TabCtrl);
            this.container.addChild(tab.node);
            tab.init({
                sidebar: this,
                idx: i,
                iconSF: iconSF
            });
            this.tabs[i] = tab;
        }
        this.tabs[this.curTabIdx].turnBig();
        const pos = this.highlight.position;
        this.highlight.setPosition(this.curTabIdx * this.tabWidth, pos.y, pos.z);
    }

    tabPressed(idx: number) {
        for (let i = 0; i < this.tabs.length; ++i) {
            let tab = this.tabs[i];
            if (tab.idx === idx) {
                tab.turnBig();
            } else if (this.curTabIdx === tab.idx) {
                tab.turnSmall();
            }
        }
        this.curTabIdx = idx;
        // let highlightMove = cc.moveTo(this.tabSwitchDuration, cc.p(this.curTabIdx * this.tabWidth)).easing(cc.easeQuinticActionInOut());
        // this.highlight.stopAllActions();
        // this.highlight.runAction(highlightMove);
        this.mainMenu.switchPanel(this.curTabIdx);
    }
}
