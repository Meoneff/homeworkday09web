import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/models/item.model';
import { ItemState } from 'src/app/ngrx/states/item.state';
import* as ItemAction from 'src/app/ngrx/actions/item.actions'

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})
export class DialogDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public item: Item, private store: Store<{ item: ItemState }>,  public dialogRef: MatDialogRef<DialogDetailComponent>) {
    console.log(this.item)
  }
  additemForm!: FormGroup;
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
  updateItem(item: Item){
    item._id = this.item._id
    if(!item.description){
      item.description = this.item.description
    }
    if(!item.imgSrc){
      item.imgSrc = this.item.imgSrc
    }
    if(!item.price){
      item.price = this.item.price
    }
    if(!item.name)
    {
      item.name = this.item.name
    }
    console.log(item.price)
    this.store.dispatch(ItemAction.updateItem({item}));
    this.dialogRef.close('close')
  }
  deleteItem(id: string) {
    this.store.dispatch(ItemAction.deleteItem({ id }));
    this.dialogRef.close('close')

  }
}
