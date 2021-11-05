import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css']
})
export class P4Component implements OnInit {
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
