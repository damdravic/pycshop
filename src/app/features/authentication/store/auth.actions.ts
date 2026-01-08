import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../models/customer';
import {RegCustomer} from '../models/regCustomer';
import { Credentials } from '../models/credentials';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    //Login
    'Login Auth': props<{credentials : Credentials}>(),
    'Login Auth Success': props<{ customer : Customer}>(),
    'Login Auth Failure': props<{ error: string }>(),

    //Auth Me
    'Load Me': emptyProps(),
    'Load Me Success' : props<{customer : Customer}>(),
    'Load Me Failled' : props<{error : string}>(),

   //Register
   'Register Auth': props<{regCustomer : RegCustomer}>(),
   'Register Auth Siccess': props<{customer : Customer}>(),
   'Register Auth Failure':props<{error: string}>()


  }
});
