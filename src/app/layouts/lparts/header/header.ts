import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Cart } from '../widgets/cart/cart';
import { Wishlist } from '../widgets/wishlist/wishlist';

import { Account } from '../widgets/account/account';


@Component({
  selector: 'app-header',
  imports: [CommonModule,Cart,Wishlist,Account],
  templateUrl: './header.html',
  styleUrl: './header.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {

  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
}



}