import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemState } from 'src/app/ngrx/states/item.state';
import * as ItemAction from 'src/app/ngrx/actions/item.actions'
import * as CartAction from 'src/app/ngrx/actions/cart.actions'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartState } from 'src/app/ngrx/states/cart.state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  itemList$: Observable<Item[]> = this.store.select('item','itemList')
  constructor( private store: Store<{item: ItemState}>, private storeCart: Store<{cart: CartState}>){
    this.store.dispatch(ItemAction.get());

    // this.itemList$.forEach(item=>{
    //   console.log(item.length)
    // })
    this.itemList$.subscribe((item)=>{
      console.log(item);
    })
  }
  addItemToCart(item: Item){
    this.storeCart.dispatch(CartAction.addItemToCart({item}))
  }
  
}
