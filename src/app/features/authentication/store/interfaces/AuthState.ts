import { Customer } from "../../models/customer"


export interface AuthState {
    loading : boolean,
    loaded : boolean,
    authenticated : boolean,
   customer : Customer | null
    error : string | null
}


export const initialAuthState : AuthState = {
    loading : false,
    loaded : false,
    authenticated : false,
    customer : null,
    error : null
}