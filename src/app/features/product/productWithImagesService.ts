import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AxmHttpResponse } from '../../core/model/axmHttpResponse';
import { ProductWithImages } from './models/productWithImages';

@Injectable({
  providedIn: 'root',
})
export class ProductWithImagesService {
   
  private serverUrl = environment.apiUrl;
  private http = inject(HttpClient);


  getAllProdWithImages$() : Observable<AxmHttpResponse<{productsWithImages : ProductWithImages[] }>>{
    return this.http.get<AxmHttpResponse<{productsWithImages : ProductWithImages[]}>>(
      `${this.serverUrl}/public/productsWithImages`
    ).pipe(
      tap(response => console.log("in service ",response.data.productsWithImages))
    )
  }
}
