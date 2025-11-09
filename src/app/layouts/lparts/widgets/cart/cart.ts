import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cart {
  cartDisplay: boolean = false;

  cartDisplayToggle() {
    this.cartDisplay = !this.cartDisplay;
  }
}
