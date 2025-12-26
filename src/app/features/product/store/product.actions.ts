import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../models/product';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products : Product[] }>(),
    'Load Products Failure': props<{ error: string}>(),
  }
});
