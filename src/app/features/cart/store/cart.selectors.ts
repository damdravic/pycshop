import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './interfaces/cart-state';
import { cartFeatureKey } from './cart.reducer';

export const cartFeatureSelector =  createFeatureSelector<CartState>(cartFeatureKey);

export const selectCartProducts = createSelector(
    cartFeatureSelector,
    (state) => state.cartProducts
    
);