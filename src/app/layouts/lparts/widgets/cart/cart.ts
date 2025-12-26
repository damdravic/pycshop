import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartActions } from '../../../../features/cart/store/cart.actions';
import { selectCartProducts } from '../../../../features/cart/store/cart.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cart implements OnInit {
 
  private store = inject(Store);
  cartDisplay: boolean = false;
  cartProducts$ = this.store.select(selectCartProducts);
 
  ngOnInit(): void {
    this.store.dispatch(CartActions.loadCart());
  }


 



  cartDisplayToggle() {
    this.cartDisplay = !this.cartDisplay;


  }
}
