import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { initialAuthState } from './interfaces/AuthState';


export const authFeatureKey = 'auth';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginAuth, (state) => ({
    ...state,
    loading: true
  })),
  on(AuthActions.loginAuthSuccess, (state, { customer }) => ({
    ...state,
    loading: false,
    loaded: true,
    customer,
    error: null
  })),
  on(AuthActions.loginAuthFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  })),
  on(AuthActions.loadMe, (state) => ({
    ...state,
    loading: true
  })),
  on(AuthActions.loadMeSuccess, (state, { customer }) => ({
    ...state,
    loading: false,
    loaded: true,
    customer,
    error: null
  })),
  on(AuthActions.loadMeFailled, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error

  })
  ))






