import { createAction, props } from '@ngrx/store';
import { ResponseItem } from '../models/item';

export const searchItemsByWords = createAction(
  '[ItemsMethod] Search Items By Word',
  props<{ searchWord: string }>()
);

export const searchItemsById = createAction(
  '[ItemsMethod] Search Items By Id',
  props<{ id: number }>()

  );

export const searchAllItems = createAction(
  '[ItemsMethod] Search All Items'
);

export const loadItemsSuccess = createAction(
  '[ItemsMethod] Load Items Success',
  props<{ responseItem: ResponseItem}>()
);

export const loadItemsError = createAction(
  '[ItemsMethod] Load Items Error',
  props<{ responseItem: ResponseItem }>()
);
