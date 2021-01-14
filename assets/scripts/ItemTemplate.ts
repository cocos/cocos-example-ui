import { _decorator, Component, Sprite, Label } from "cc";
import { Item } from "./ItemList";
const { ccclass, property } = _decorator;

@ccclass
export class ItemTemplate extends Component {
    @property
    public id = 0;
    @property(Sprite)
    public icon: Sprite = null!;
    @property(Label)
    public itemName: Label = null!;
    @property(Label)
    public itemPrice: Label = null!;

    // data: {id,iconSF,itemName,itemPrice}
    init(data: Item) {
        this.id = data.id;
        this.icon.spriteFrame = data.iconSF;
        this.itemName.string = data.itemName;
        this.itemPrice.string = data.itemPrice + '';
    }
}
