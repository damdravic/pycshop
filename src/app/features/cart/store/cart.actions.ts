import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CartProduct } from '../models/cart-product';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Load Cart': emptyProps(),
    'Load Cart Success': props<{ cartProducts : CartProduct[] }>(),
    'Load Cart Failure': props<{ error: string }>(),
    'Add Product To Cart' : props<{ cartProduct : CartProduct}>()
  }
});
