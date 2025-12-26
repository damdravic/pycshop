import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../features/product/models/product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-result',
  imports: [CommonModule],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css',
})
export class SearchResult implements OnInit {
 
  @Input() result$ !: Observable<Product[]>;


  
  ngOnInit(): void {
    this.result$.subscribe(res => console.log(res) );
  }

}
