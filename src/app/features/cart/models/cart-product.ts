import { ProductWithImages } from "../../product/models/productWithImages";

export interface CartProduct {
    productWithImages : ProductWithImages,
    quantity : number,
}
