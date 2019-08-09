import { _decorator, Component, SpriteComponent, LabelComponent } from "cc";
import { Item } from "./ItemList";
const { ccclass, property } = _decorator;

@ccclass
export class ItemTemplate extends Component {
    @property
    public id = 0;
    @property(SpriteComponent)
    public icon: SpriteComponent | null = null;
    @property(LabelComponent)
    public itemName: LabelComponent | null = null;
    @property(LabelComponent)
    public itemPrice: LabelComponent | null = null;

    // data: {id,iconSF,itemName,itemPrice}
    init(data: Item) {
        this.id = data.id;
        this.icon.spriteFrame = data.iconSF;
        this.itemName.string = data.itemName;
        this.itemPrice.string = data.itemPrice + '';
    }
}
