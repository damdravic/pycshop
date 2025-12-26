import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../productService';
import { ProductActions } from './product.actions';
import { catchError, map, of, switchMap } from 'rxjs';



@Injectable()
export class ProductEffects {


  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productService.getAllProduct$().pipe(
          map(response => ProductActions.loadProductsSuccess({ products: response.data.products }))
        )

      ),
      catchError(err => of(ProductActions.loadProductsFailure({ error: err?.message ?? 'Failed to load products' })))

    )


  );

}





