import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductWithImagesState } from './interface/productWithImagesState';
import { productWithImagesFeatureKey } from './productWithImages.reducer';

export const selectorProductWithImagesState = createFeatureSelector<ProductWithImagesState>(productWithImagesFeatureKey);

export const selectProductsWithImages = createSelector(
    selectorProductWithImagesState,
    (state) => state.productsWithImages
)