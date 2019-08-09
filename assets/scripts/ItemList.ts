import { _decorator, Component, SpriteFrame, Prefab } from "cc";
const { ccclass, property } = _decorator;

@ccclass('Item')
export class Item {
    @property
    id = 0;
    @property
    itemName = '';
    @property
    itemPrice = 0;
    @property(SpriteFrame)
    iconSF: SpriteFrame | null = null;
}

@ccclass
export class ItemList extends Component {
    @property([Item])
    items: Item[] = [];
    @property(Prefab)
    itemPrefab: Prefab | null = null;

    onLoad() {
        for (var i = 0; i < this.items.length; ++i) {
            var item = cc.instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);
            item.getComponent('ItemTemplate').init(data);
        }
    }
}
