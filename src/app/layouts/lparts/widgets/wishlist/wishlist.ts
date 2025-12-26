import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CartProduct } from '../../../../features/cart/models/cart-product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Wishlist {

  wishlistDisplay: boolean = false;
 wishListProducts$ !: Observable<CartProduct[]>;

  wishlistDisplayToggle() {
    this.wishlistDisplay = !this.wishlistDisplay ;
  }
}
