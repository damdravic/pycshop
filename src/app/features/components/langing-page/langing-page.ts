import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle'; 
import { SwiperModule } from 'ngx-swiper-wrapper';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-langing-page',
  imports: [CommonModule],
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
