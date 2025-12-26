import { Component, inject } from '@angular/core';
import { ProductService } from '../../productService';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { ProductActions } from '../../store/product.actions';
import { selectProducts } from '../../store/product.selectors';
import { ProductCard } from '../product-card/product-card';
import { ProductWithImagesActions } from '../../store/productWithImages.actions';
import { selectProductsWithImages } from '../../store/product-with-images.selectors';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  private productService = inject(ProductService);
  private store = inject(Store);

  
  products$ = this.store.select(selectProducts);
  productsWithImages$ = this.store.select(selectProductsWithImages);

  constructor(){
   this.store.dispatch(ProductActions.loadProducts());
    this.store.dispatch(ProductWithImagesActions.loadProductsWithImages());
     this.productsWithImages$.subscribe(value => {
  console.log('in  products', value);
});
  }





}
