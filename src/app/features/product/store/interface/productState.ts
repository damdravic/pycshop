import { Product } from "../../models/product";

export interface ProductState {

    products ?: Product[],
    loading: boolean,
    loaded : boolean,
    error ?: string | null
}


export const initialProductState : ProductState = {

    products : [],
    loading : false,
    loaded : false,
    error : null


}