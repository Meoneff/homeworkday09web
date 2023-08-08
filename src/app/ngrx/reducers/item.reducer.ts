import { createReducer, on } from '@ngrx/store';
import { ItemState } from '../states/item.state';
import * as ItemAction from '../actions/item.actions';


export const initualState: ItemState = {
  isLoading: false,
    isSuccess: false,
    isDelloading: false,
    isDelSuccess: false,
    isAddSuccess:false,
    isAddloading:false,
    isUpSuccess:false,
    isUpLoading:false,
    itemList: [],
    error: ""
};
export const ItemReducer = createReducer(
    initualState,
    on(ItemAction.get,(state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: true,
            isSuccess: false,
            error: '',
        };
        return newState;
    }),
    on(ItemAction.getSuccess, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: false,
            isSuccess: true,
            itemList: action.itemList,
        }        
        return newState;
    }),
    on(ItemAction.getFailure, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: false,
            isSuccess: false,
            error: action.error,
        }        
        console.log(newState.error)
        return newState;
    }),
    on(ItemAction.deleteItem,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: true,
            isDelSuccess: false,
            error: '',
        };
        return newState;
    }),
    on(ItemAction.deleteItemSuccess, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: false,
            isDelSuccess: true,
        }        
        return newState;
    }),
    on(ItemAction.deleteItemFailure, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: false,
            isDelSuccess: false,
            error: action.error,
        }        
        console.log(newState.error)
        return newState;
    }),
    on(ItemAction.additem,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: true,
            isAddSuccess: false,
            error: '',
        };
        return newState;
    }),
    on(ItemAction.addItemSuccess, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: false,
            isAddSuccess: true,
        }        
        return newState;
    }),
    on(ItemAction.addItemFailure, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: false,
            isAddSuccess: false,
            error: action.error,
        }        
        console.log(newState.error)
        return newState;
    }),

    on(ItemAction.updateItem,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpLoading: true,
            isUpSuccess: false,
            error: '',
        };
        return newState;
    }),
    on(ItemAction.updateItemSuccess, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpLoading: false,
            isUpSuccess: true,
        }        
        return newState;
    }),
    on(ItemAction.updateItemFailure, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpLoading: false,
            isUpSuccess: false,
            error: action.error,
        }        
        console.log(newState.error)
        return newState;
    }),
)
