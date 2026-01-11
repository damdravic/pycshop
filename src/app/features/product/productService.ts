import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AxmHttpResponse } from '../../core/model/axmHttpResponse';
import { Product } from './models/product';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
     


      private server =  environment.apiUrl;
      private http = inject(HttpClient);

     
      getAllProduct$() : Observable<AxmHttpResponse<{products : Product[]}>> {
        return this.http.get<AxmHttpResponse<{products : Product[]}>>(
          `${this.server}/getAllProducts`
        ).pipe(
          tap(response => console.log(response.data.products))
        )
      }

       searchProducts(term: string): Observable<Product[]> {

          

        return this.getAllProduct$().pipe(
          map(response => 
            response.data.products.filter(p => p.name.toLowerCase().includes(term.toLowerCase())))
        );
      }

  
}
