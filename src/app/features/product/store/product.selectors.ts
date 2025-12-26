import { createFeatureSelector, createSelector } from "@ngrx/store";

import { productFeatureKey } from "./product.reducer";
import { ProductState } from "./interface/productState";



export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);

export const selectProducts = createSelector(
    selectProductState,
    (state) => state.products
);
