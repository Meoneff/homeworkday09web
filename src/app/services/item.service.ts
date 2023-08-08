import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  constructor(private httpClient: HttpClient) { }
  getItem(){
     return this.httpClient.get<Item[]>("http://localhost:3000/product");
  }
  deleteItem(id:string){
    return this.httpClient.delete<Item>(`http://localhost:3000/product/delete/${id}`)
    
  }
  addItem(item:Item){
    return this.httpClient.post<Item>(`http://localhost:3000/product/create`,item)
  }
  updateItem(item:Item){
    return this.httpClient.put<Item>(`http://localhost:3000/product/update/${item._id}`,item)
  }
}
