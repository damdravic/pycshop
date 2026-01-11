import { Component, inject, Input } from '@angular/core';
import { ProductWithImages } from '../../product/models/productWithImages';
import { ActivatedRoute } from '@angular/router';
import { ProductWithImagesService } from '../../product/productWithImagesService';
import { Store } from '@ngrx/store';
import { selectProductsWithImages } from '../../product/store/product-with-images.selectors';
import { map, Observable, of, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductWithImagesActions } from '../../product/store/productWithImages.actions';
import { ImageUrlPipe } from '../../../core/pipe/image-url-pipe';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, ImageUrlPipe],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {

  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private productService = inject(ProductWithImagesService);

  product$ !: Observable<ProductWithImages | null>;

  constructor() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      this.product$ = this.loadProduct(id)
    } else {
      this.product$ = of(null)
    }

  }


  loadProduct(id: number): Observable<ProductWithImages | null> {

    this.store.select(selectProductsWithImages).pipe(
      take(1)
    ).subscribe(productsWithImages => {
      if(!productsWithImages || productsWithImages.length === 0){
           this.store.dispatch(ProductWithImagesActions.loadProductsWithImages())
      }
    })




    return this.store.select(selectProductsWithImages).pipe(
      map(prods => prods?.find(p => p.product.id === id) ?? null)
    )
  }

}
