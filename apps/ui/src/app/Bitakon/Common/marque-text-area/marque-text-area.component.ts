import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-marque-text-area',
  templateUrl: './marque-text-area.component.html',
  styleUrls: ['./marque-text-area.component.scss']
})
export class MarqueTextAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
