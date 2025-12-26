import { isPlatformServer } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID, REQUEST } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {



  const platformId = inject(PLATFORM_ID);

  let request = req;

  if(isPlatformServer(platformId)){
    const serverReq = inject(REQUEST, {optional: true});

    const cookie = serverReq?.headers.get('cookie') || '';

  console.log("---header-------------------------> ",serverReq?.headers) ;
    console.log("-----------------------------------> ",cookie

    );

    if(cookie){
      request = request.clone({setHeaders : {Cookie : cookie}});
    }else{
      request = request.clone({withCredentials : true});
    }
  }

  return next(request);
};
