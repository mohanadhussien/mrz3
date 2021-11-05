import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-p8',
  templateUrl: './p8.component.html',
  styleUrls: ['./p8.component.css']
})
export class P8Component implements OnInit {
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 20
  };

  constructor() { }

  ngOnInit(): void {
  }

}
