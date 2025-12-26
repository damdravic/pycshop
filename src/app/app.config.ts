import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './features/product/store/product.effects';

import { productFeatureKey, productReducer } from './features/product/store/product.reducer';
import { productWithImagesFeatureKey, productWithImagesReducer } from './features/product/store/productWithImages.reducer';
import { ProductWithImagesffects } from './features/product/store/productWithImages.effects';
import { cartFeatureKey, cartReducer } from './features/cart/store/cart.reducer';
import { authFeatureKey, authReducer } from './features/authentication/store/auth.reducer';
import { AuthEffects } from './features/authentication/store/auth.effects';
import { credentialsInterceptor } from './core/interceptors/credentials-interceptor';
import { authInterceptor } from './core/interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(), withInterceptors([credentialsInterceptor,authInterceptor])),
    provideStore({
      [productFeatureKey]: productReducer,
      [cartFeatureKey]: cartReducer,
      [productWithImagesFeatureKey]: productWithImagesReducer,
      [authFeatureKey]: authReducer
    }),
    provideEffects(ProductEffects,ProductWithImagesffects, AuthEffects),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

  ]
};
