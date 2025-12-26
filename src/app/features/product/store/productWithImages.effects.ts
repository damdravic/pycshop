import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductWithImagesActions } from './productWithImages.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductWithImagesService } from '../productWithImagesService';



@Injectable()
export class ProductWithImagesffects {


  private actions$ = inject(Actions);
  private productWithImagesService = inject(ProductWithImagesService);




  loadProductsWithImages$ = createEffect(() => 
  this.actions$.pipe(
    ofType(ProductWithImagesActions.loadProductsWithImages),
    switchMap(() => 
    this.productWithImagesService.getAllProdWithImages$().pipe(
      map(response => ProductWithImagesActions.loadProductsWithImangesSuccess({productsWithImages : response.data.productsWithImages}))
    )),
    catchError(err => of(ProductWithImagesActions.loadProductsWithImagesFailure({error : err?.message})))))
    

}
