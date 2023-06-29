import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-about-marquee',
  templateUrl: './about-marquee.component.html',
  styleUrls: ['./about-marquee.component.scss']
})
export class AboutMarqueeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
