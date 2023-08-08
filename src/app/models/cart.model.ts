import { Item } from "./item.model";

export interface Cart {
    item: Item;
    quantity: number;
    stock:number;
}