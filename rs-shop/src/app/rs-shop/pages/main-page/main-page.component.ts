import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  // A11y,
  // Virtual,
  // Zoom,
  Autoplay,
  // Thumbs,
  // Controller,
  Swiper,
} from 'swiper';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  // A11y,
  // Virtual,
  // Zoom,
  Autoplay,
  // Thumbs,
  // Controller,
]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  private swiper: SwiperCore | null = null;

  private swiper2: SwiperCore | null = null;

  public items = [1, 2, 3];

  private swiperConfig: SwiperCore | null = null;

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'swiper-pagination-bullet',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
    this.swiper2 = new Swiper('.swiper2-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      // centeredSlides: true,
      // loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: '.swiper2-pagination-bullet',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
