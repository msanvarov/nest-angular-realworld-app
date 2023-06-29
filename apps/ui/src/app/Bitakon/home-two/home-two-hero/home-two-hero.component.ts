import { Component, OnInit } from '@angular/core';
import SwiperCore, {Navigation,EffectFade } from "swiper";

SwiperCore.use([Navigation,EffectFade]);

@Component({
  selector: 'app-home-two-hero',
  templateUrl: './home-two-hero.component.html',
  styleUrls: ['./home-two-hero.component.scss']
})
export class HomeTwoHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
