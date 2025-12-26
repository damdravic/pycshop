import { createReducer, on } from '@ngrx/store';
import { ProductActions } from './product.actions';
import { Product } from '../models/product';
import { initialProductState } from './interface/productState';

export const productFeatureKey = 'product';
export const productReducer = createReducer(
  initialProductState,


  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading : true,
    error: null
  })),
  on(ProductActions.loadProductsSuccess,(state,{ products }) => ({
    loading : false,
    loaded: true,
    products,
    error : null
  })),
  on(ProductActions.loadProductsFailure, (state,{error}) => ({
    loading: false,
    loaded:false,
    error
  }))



);

