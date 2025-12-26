import { createReducer, on } from '@ngrx/store';
import { ProductWithImagesActions } from './productWithImages.actions';
import { initialProductWithImagesState } from './interface/productWithImagesState';

export const productWithImagesFeatureKey = 'productWithImages';



export const productWithImagesReducer = createReducer(
  initialProductWithImagesState,

 on(ProductWithImagesActions.loadProductsWithImages, (state) => ({
  ...state,
  loading : true,
  error: null
 })),
 on(ProductWithImagesActions.loadProductsWithImangesSuccess, (state,{productsWithImages}) => ({
  ...state,
  loading: false,
  loaded: true,
  productsWithImages,
  error: null
 })),
 on(ProductWithImagesActions.loadProductsWithImagesFailure, (status, {error}) => ({
  loading : false,
  loaded : false,
  error

 }))


);

