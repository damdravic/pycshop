import { HttpInterceptorFn } from '@angular/common/http';
import { request } from 'http';

export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {

  const request = req.clone({withCredentials: true})

  return next(request);
};
