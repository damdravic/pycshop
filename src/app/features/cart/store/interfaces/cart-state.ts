import { CartProduct } from "../../models/cart-product"



export interface CartState {
    loading: boolean,
    loaded: boolean,
    userId ?: number | null,
    cartProducts : CartProduct[]
    error ?: string
}

export const initialCartState : CartState ={
    loading: false,
    loaded: false,
    userId : null,
    cartProducts : [],
    error : ''
}