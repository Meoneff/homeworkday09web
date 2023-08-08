import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { CartState } from 'src/app/ngrx/states/cart.state';
import { ItemState } from 'src/app/ngrx/states/item.state';
import *as ItemAction from 'src/app/ngrx/actions/item.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  itemList$: Observable<Item[]> = this.store.select('item', 'itemList');
  isDelSuccess$ = this.store.select(
    'item', 'isDelSuccess'
  )
  isAddSuccess$ = this.store.select('item', 'isAddSuccess');
  isUpSuccess$ = this.store.select('item', 'isUpSuccess')
  additemForm!: FormGroup;
  constructor(private store: Store<{ item: ItemState }>, private storeCart: Store<{ cart: CartState }>, private dialog: MatDialog) {
    console.log('admin')
    this.store.dispatch(ItemAction.get());

    this.itemList$.forEach(item => {
      console.log(item.length)
    }),
    
      this.isDelSuccess$.subscribe((value) => {
        console.log(value)
        if (value) {
          this.store.dispatch(ItemAction.get());
        }
      })

    this.isAddSuccess$.subscribe((value) => {
      console.log(value)
      if (value) {
        this.store.dispatch(ItemAction.get());
      }
    });

    this.isUpSuccess$.subscribe(value => {
      console.log(value)
      if (value) {
        this.store.dispatch(ItemAction.get());
      }
    });
  }
  ngOnInit(): void {
    this.additemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgSrc: new FormControl(
        '', [Validators.required]
      ),
    });
  }


  deleteItem(id: string) {
    this.store.dispatch(ItemAction.deleteItem({ id }))

  }
  addItem(item: Item) {
    if(!(item.name)||!(item.description)||!(item.price)||!(item.imgSrc)){
      alert("nhập vào chi tiết sản phẩm đi thiếu kìa ")
    }
    else{
      this.store.dispatch(ItemAction.additem({ item }))
    }

  }
  openDialog(item: Item): void {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      data: item,
    });
  }


}
