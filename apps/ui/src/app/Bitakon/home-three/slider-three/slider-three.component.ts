import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay,Pagination } from "swiper";

SwiperCore.use([Autoplay,Pagination]);

@Component({
  selector: 'app-slider-three',
  templateUrl: './slider-three.component.html',
  styleUrls: ['./slider-three.component.scss']
})
export class SliderThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
