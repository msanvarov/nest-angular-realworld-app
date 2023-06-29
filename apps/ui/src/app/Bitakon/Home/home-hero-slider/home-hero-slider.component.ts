import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay,Navigation } from "swiper";

SwiperCore.use([Autoplay,Navigation]);

@Component({
  selector: 'app-home-hero-slider',
  templateUrl: './home-hero-slider.component.html',
  styleUrls: ['./home-hero-slider.component.scss']
})
export class HomeHeroSliderComponent implements OnInit {

  sliderData = [
    {
      id:1,
      bigImg:'assets/img/slider/slider-big-1.jpg',
    },
    {
      id:2,
      bigImg:'assets/img/slider/slider-big-2.jpg',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
