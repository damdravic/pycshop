import { ProductWithImages } from "../../models/productWithImages";

export interface ProductWithImagesState {
    productsWithImages ?: ProductWithImages[],
    loading : boolean,
    loaded : boolean,
    error : string | null
}

export const initialProductWithImagesState : ProductWithImagesState = {
    productsWithImages : [],
    loading : false,
    loaded : false,
    error : null
}