import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle'; 
import { SwiperModule } from 'ngx-swiper-wrapper';
import { isPlatformBrowser } from '@angular/common';
import { Products } from '../../product/components/products/products';
import { TopProducts } from "../../product/components/top-products/top-products";
import { CategoryPromoGrid } from '../../product/category-promo-grid/category-promo-grid';

@Component({
  selector: 'app-langing-page',
  imports: [Products, TopProducts, CategoryPromoGrid],
  templateUrl: './langing-page.html',
  styleUrl: './langing-page.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LangingPage implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  isBrowser = false;

  images = [
    { src: 'assets/images/demo11.jpg', alt: 'Imagine 1' },
    { src: 'assets/images/demo22.jpg', alt: 'Imagine 2' },
    { src: 'assets/images/demo33.jpg', alt: 'Imagine 3' },
  ];

  async ngAfterViewInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (!this.isBrowser) return;

    const { register } = await import('swiper/element/bundle');
    register();
  }
}
