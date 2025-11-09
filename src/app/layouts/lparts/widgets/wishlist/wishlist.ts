import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Wishlist {

  wishlistDisplay: boolean = false;

  wishlistDisplayToggle() {
    this.wishlistDisplay = !this.wishlistDisplay ;
  }
}
