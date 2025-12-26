import { createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';
import { initialCartState } from './interfaces/cart-state';


export const cartFeatureKey = 'cart';

export const cartReducer = createReducer(
  initialCartState,

  on(CartActions.loadCart, (state) => ({
    ...state,
    loading: true,
  })),

  on(CartActions.loadCartSuccess, (state, { cartProducts }) => ({
    ...state,
    loading: false,
    loaded: true,
    cartProducts: cartProducts
  })),

  on(CartActions.loadCartFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: error

  })),

  on(CartActions.addProductToCart, (state, { cartProduct }) => {
    const exists = state.cartProducts.some(
      cp => cp.productWithImages.product.id === cartProduct.productWithImages.product.id
    );

    if (exists) {
      return {
        ...state,
        cartProducts: state.cartProducts.map(
          cp => cp.productWithImages.product.id === cartProduct.productWithImages.product.id ? { ...cp, quantity: cp.quantity + cartProduct.quantity } : cp
        )
      }

    }

    return {
      ...state,
      cartProducts: [...state.cartProducts, cartProduct]
    };

  })
);

