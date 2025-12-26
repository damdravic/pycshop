import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./interfaces/AuthState";
import { authFeatureKey } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthentificatedCustomer = createSelector(
    selectAuthState,
    (state) => state.customer
)