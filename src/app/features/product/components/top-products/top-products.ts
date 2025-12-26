import { Component, inject, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { selectProducts } from '../../store/product.selectors';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-top-products',
  imports: [CommonModule],
  templateUrl: './top-products.html',
  styleUrl: './top-products.css',
})
export class TopProducts implements OnInit {


  private store = inject( Store)

  topProducts$ = this.store.select(selectProducts);


    ngOnInit(): void {
    
  }





}
