import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Store } from '@ngrx/store';
import * as CartAction from 'src/app/ngrx/actions/cart.actions'
import { CartState } from 'src/app/ngrx/states/cart.state';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartList$ = this.store.select((state) => state.cart.cartList);
  total$ = this.store.select((state) => state.cart.total)
  constructor(private store: Store<{cart: CartState}>){
    console.log('hello')
    console.log(this.cartList$)
  }
  removeItemFromCart(item: Item){
    this.store.dispatch(CartAction.removeItemFromCart({item}))
  }
  clearAllCart(){
    this.store.dispatch(CartAction.clearAllCart()) 
  }
  addItemToStock(item: Item){
    this.store.dispatch(CartAction.addItemToStock({item}))
  }
  removeItemFromStock(item: Item){
    this.store.dispatch(CartAction.removeItemFromStock({item}))
  }

  purchase(): void {
    alert('Mua hàng thành công');
    
  }

}
