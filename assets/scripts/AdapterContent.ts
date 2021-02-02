
import { _decorator, Component, Node, ScrollView, UITransform, Vec3 } from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('AdapterContent')
export class AdapterContent extends Component {
    @type(Node)
    scroll: Node = null!;

    start () {
        this.sizeChanged();
        this.scroll.on(Node.EventType.SIZE_CHANGED, this.sizeChanged, this);
    }

    sizeChanged(){
        const contentSize = this.scroll.getComponent(UITransform)!.contentSize;
        const pos = this.node.position;
        this.node.setPosition(new Vec3(pos.x, contentSize.height / 2));
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
