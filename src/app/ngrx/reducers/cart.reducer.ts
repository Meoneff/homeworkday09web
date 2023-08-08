
import * as CartAction from "../actions/cart.actions"
import { createReducer, on } from "@ngrx/store"
import { state } from "@angular/animations"
import { CartState } from "../states/cart.state"


export const initualState: CartState ={
    cartList: [],
    itemList: [],
    total:0

}
export const CartReducer = createReducer(
    initualState,
    on(CartAction.addItemToCart, (state, action) => {
        console.log(action.type);
        const cartList = [...state.cartList];
        const index = cartList.findIndex((item) => item._id === action.item._id);
        if (index !== -1) {
          cartList[index] = {
            ...cartList[index],
            stock: cartList[index].stock + 1,
            price: cartList[index].price * cartList[index].stock,
          };
        } else {
          cartList.push({
            ...action.item,
            stock: 1,
          });
        }
        const total = state.total + action.item.price;
        let newState = {
          ...state,
          cartList,
          total,
        };
        return newState;
      }),
      on(CartAction.removeItemFromCart, (state, action) => {
        console.log(action.type);
        let newState = {
          ...state,
          cartList: state.cartList.filter((item) => item._id !== action.item._id),
          total: state.total - action.item.price * action.item.stock,
        };
        return newState;
      }),
      on(CartAction.addItemToStock, (state, action) => {
        console.log(action.type);
        let cartList = [...state.cartList];
        const index = cartList.findIndex((item) => item._id === action.item._id);
        if (index !== -1) {
          cartList[index] = {
            ...cartList[index],
            stock: cartList[index].stock + 1,
          };
        }
        let newState = {
          ...state,
          total: state.total + action.item.price,
          cartList,
        };
        return newState;
      }),
    // on(CartAction.removeProductFromStock, (state,action)=>{
    //     console.log(action.type);
    //     const productList = state.productList.map(item=>{
    //         if(item._id === action.product._id){
    //             return {
    //                 ...item,
    //                 stock: item.stock -1
    //             }
    //         }
    //         return item;
    //     });
    //     return {
    //         ...state,
    //         productList,
    //     }
    // }),
    on(CartAction.removeItemFromStock, (state, action) => {
        console.log(action.type);
        let cartList = [...state.cartList];
        const index = cartList.findIndex((item) => item._id === action.item._id);
        if (index !== -1) {
          cartList[index] = {
            ...cartList[index],
            stock: cartList[index].stock - 1,
          };
        }
    
        if (cartList[index].stock === 0) {
          cartList = cartList.filter((item) => item._id !== action.item._id);
        }
        let newState = {
          ...state,
          total: state.total - action.item.price,
          cartList,
        };
        return newState;
      }),
      on(CartAction.clearAllCart, (state,action) =>{
        console.log(action.type);
        const productList = state.itemList.map(item=>{
            return{
                ...item,
            }
        })
        return {
            ...state,
            productList,
            cartList: [],
            total: 0,
        }
    })

)