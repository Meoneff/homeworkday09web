import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/models/item.model';


export const get = createAction('[item] get item');
export const getSuccess = createAction(
    '[item] get item success',
     props<{itemList: Item[]}>()
    );
export const getFailure = createAction(
    '[item] get item failure',
    props<{error: any}>()
);
export const deleteItem = createAction('[item] delete item',props<{id:string}>())
export const deleteItemSuccess = createAction(
    '[item] delete item success',
    );
export const deleteItemFailure = createAction(
    '[item] delete item failure',
    props<{error: any}>()
)
export const additem = createAction('[item] add item',props<{item: Item}>())
export const addItemSuccess = createAction(
    '[item] add item success',
    );
export const addItemFailure = createAction(
    '[item] add item failure',
    props<{error: any}>()
)

export const updateItem = createAction('[item] update item',props<{item: Item}>())
export const updateItemSuccess = createAction(
    '[item] update item success',
    );
export const updateItemFailure = createAction(
    '[item] update item failure',
    props<{error: any}>()
)