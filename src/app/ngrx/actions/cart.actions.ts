import { createAction, props } from "@ngrx/store";
import { Item } from "src/app/models/item.model";

export const addItemToCart  = createAction(
    '[cart] add item to cart',
    props<{item: Item}>() 
);
export const removeItemFromCart = createAction(
    '[cart] remove item from cart',
    props<{item: Item}>()
);
export const addItemToStock = createAction(
    '[cart] add item to stock',
    props<{item: Item}>()
);
export const removeItemFromStock = createAction(
    '[cart] remove item from stock',
    props<{item: Item}>()
);
export const clearAllCart = createAction(
    '[cart] clear all cart'
);
