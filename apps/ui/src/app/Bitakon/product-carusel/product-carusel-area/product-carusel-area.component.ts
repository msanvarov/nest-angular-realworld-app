import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay,Pagination,Navigation } from "swiper";

import { ProductDataService } from './../../services/product-data/product-data.service';

SwiperCore.use([Autoplay,Pagination,Navigation]);


@Component({
  selector: 'app-product-carusel-area',
  templateUrl: './product-carusel-area.component.html',
  styleUrls: ['./product-carusel-area.component.scss']
})
export class ProductCaruselAreaComponent implements OnInit {

  productData : any;

  constructor(private products:ProductDataService) {
    this.productData = products.productData();
   }

  ngOnInit(): void {
  }

}
