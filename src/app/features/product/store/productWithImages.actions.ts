import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ProductWithImages } from "../models/productWithImages";

export const ProductWithImagesActions = createActionGroup({
    source:'ProductWithImages',
    events: {
        'Load ProductsWithImages' : emptyProps(),
        'Load ProductsWithImanges Success': props<{productsWithImages : ProductWithImages[] }>(),
        'Load ProductsWithImages Failure': props<{error : string}>()

    }
})