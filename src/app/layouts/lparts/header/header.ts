import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input } from '@angular/core';
import { Cart } from '../widgets/cart/cart';
import { Wishlist } from '../widgets/wishlist/wishlist';

import { Account } from '../widgets/account/account';
import { SearchResult } from '../search-result/search-result';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, Observable, switchMap } from 'rxjs';
import { ProductWithImagesService } from '../../../features/product/productWithImagesService';
import { ProductService } from '../../../features/product/productService';
import { Product } from '../../../features/product/models/product';


@Component({
  selector: 'app-header',
  imports: [CommonModule, Cart, Wishlist, Account, SearchResult],
  templateUrl: './header.html',
  styleUrl: './header.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {

  isOpen: boolean = false;
  private searchTerm$ = new BehaviorSubject<string>('');
  showResult = false;

  private productService = inject(ProductService);

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }


  result$ : Observable<Product[]> = this.searchTerm$.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    filter(term => term.length > 3),
    switchMap(term => this.productService.searchProducts(term))

  )


  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim();
    this.searchTerm$.next(value);
    this.showResult = value.length > 3;
  }

}