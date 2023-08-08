import { Item } from "src/app/models/item.model";

export interface CartState{
    cartList: Item[];
    itemList: Item[];
    total: number;
}