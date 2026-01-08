import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AxmHttpResponse } from '../../core/model/axmHttpResponse';

import { Credentials } from './models/credentials';
import { Customer } from './models/customer';
import { RegCustomer } from './models/regCustomer';


@Injectable({
  providedIn: 'root',
})
export class Auth {

  private serverApi = environment.apiUrl;
  private http = inject(HttpClient);


  login(credentials: Credentials): Observable<AxmHttpResponse<{ customer: Customer }>> {
    //console.log(credentials.email + " " + credentials.password)
    return this.http.post<AxmHttpResponse<{ customer: Customer }>>(`${this.serverApi}/shop/customers/login`, credentials);
  }

  // if cookie is present, get logged in user
  loadMe(): Observable<AxmHttpResponse<{ customer: Customer }>> {
    return this.http.get<AxmHttpResponse<{ customer: Customer }>>(
      `${this.serverApi}/shop/customers/loadMe`,
      { withCredentials: true }
    )
  }
 
  // Register new customer
  register(regCustomer: RegCustomer): Observable<AxmHttpResponse<{ customer: Customer }>> {
    return this.http.post<AxmHttpResponse<{ customer: Customer }>>(
      `${this.serverApi}/shop/customers/register`, regCustomer)
  }





}
