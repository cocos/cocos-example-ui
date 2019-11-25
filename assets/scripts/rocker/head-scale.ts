import { _decorator, Component, Node, Prefab, LabelComponent, instantiate, Vec3, UICoordinateTrackerComponent, UITransformComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("HeadScale")
export class HeadScale extends Component {
    @property(Node)
    target: Node = null;
    @property(Prefab)
    aim: Prefab = null;

    private _mapNode: Node = null;
    private _mapUIComp: UICoordinateTrackerComponent = null;

    onLoad () {
        if(this.aim){
            const node = instantiate(this.aim) as Node;
            node.parent = this.target;
            this._mapNode = node;
        }

        this._mapUIComp = this.getComponent(UICoordinateTrackerComponent);
    }

    scale(pos: Vec3, ratio: number){
        if(this._mapNode){
            this._mapNode.setWorldPosition(pos);

            if (this._mapUIComp && this._mapUIComp.useScale) {
                const value = Math.floor(ratio * 100) / 100;
                this._mapNode.setScale(value, value, 1);
            }
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
