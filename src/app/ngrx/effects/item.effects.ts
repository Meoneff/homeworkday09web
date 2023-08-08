import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ItemService } from '../../services/item.service';
import * as ItemAction from '../actions/item.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ItemEffect {
  constructor(private itemService: ItemService, private action$: Actions) {}
  get$ = createEffect(() =>
    this.action$.pipe(
      ofType(ItemAction.get),
      exhaustMap(() =>
        this.itemService.getItem().pipe(
          map((items) => {
            return ItemAction.getSuccess({ itemList: items });
          }),
          catchError((error) => of(ItemAction.getFailure({ error })))
        )
      )
    )
  );
  deleteItem$ = createEffect(() =>
    this.action$.pipe(
      ofType(ItemAction.deleteItem),
      exhaustMap((action) =>
        this.itemService.deleteItem(action.id).pipe(
          map(() => ItemAction.deleteItemSuccess()),
          catchError((error) => of(ItemAction.deleteItemFailure({ error })))
        )
      )
    )
  );
  addItem$ = createEffect(() =>
  this.action$.pipe(
    ofType(ItemAction.additem),
    exhaustMap((action) =>
      this.itemService.addItem(action.item).pipe(
        map(() => ItemAction.addItemSuccess()),
        catchError((error) => of(ItemAction.addItemFailure({ error })))
      )
    )
  )
);
  updateItem$ = createEffect(() =>
    this.action$.pipe(
      ofType(ItemAction.updateItem),
      exhaustMap((action) =>
        this.itemService.updateItem(action.item).pipe(
          map(() => ItemAction.updateItemSuccess()),
          catchError((error) => of(ItemAction.updateItemFailure({ error })))
        )
      )
    )
  );
}
