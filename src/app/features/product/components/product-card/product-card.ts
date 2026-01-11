import { Component, inject, Input, OnInit } from '@angular/core';

import { ProductWithImages } from '../../models/productWithImages';

import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartActions } from '../../../cart/store/cart.actions';
import { CartProduct } from '../../../cart/models/cart-product';
import { ImageUrlPipe } from '../../../../core/pipe/image-url-pipe';

@Component({
  selector: 'app-product-card',
  imports: [RouterModule, ImageUrlPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {


  @Input() productWithImages !: ProductWithImages;

  private store = inject(Store);


  constructor(){
    console.log("prod card ",this.productWithImages);
  }
  

  addToCart(productsWithImages: ProductWithImages) {
    const cartProduct : CartProduct = {
      productWithImages : productsWithImages,
      quantity : 1
    }
    this.store.dispatch(CartActions.addProductToCart({cartProduct}))
}

  

}
