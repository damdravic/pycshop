import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './auth.actions';
import { Auth } from '../auth';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';



@Injectable()
export class AuthEffects {


  private actions$ = inject(Actions);
  private authService = inject(Auth);


  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginAuth),
      exhaustMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          tap(res => console.log("Response " + res.data.customer.firstName)),
          map(res => AuthActions.loginAuthSuccess({ customer: res.data.customer})),
          catchError(err => of(err).pipe(
            tap(e => console.log('Auth error:', e)),
            map(e => AuthActions.loginAuthFailure({ error: e }))
          ))
        )
      )
    ))


    authMe$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.loadMe),
      switchMap(() => 
      this.authService.loadMe().pipe(
        map(res => AuthActions.loadMeSuccess({customer : res.data.customer})),
        catchError(err => of(err).pipe(
            tap(e => console.log('Load Me error:', e)),
            map(e => AuthActions.loginAuthFailure({ error: e }))
        ))
      ))
    )
  )

}
