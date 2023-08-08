
import { Item } from "src/app/models/item.model";

export interface ItemState{
    isLoading: boolean;
    isSuccess: boolean;
    isDelSuccess: boolean;
    isDelloading: boolean;
    isAddSuccess: boolean;
    isAddloading: boolean;
    isUpSuccess: boolean;
    isUpLoading: boolean;
    itemList: Item[];
    error: string;
}