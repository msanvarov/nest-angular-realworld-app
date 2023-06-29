import { Component, OnInit } from '@angular/core';
import { BidsService } from '../../services/BidsData/bids.service';
import SwiperCore, {Navigation } from "swiper";


SwiperCore.use([Navigation]);

@Component({
  selector: 'app-bids-area',
  templateUrl: './bids-area.component.html',
  styleUrls: ['./bids-area.component.scss']
})
export class BidsAreaComponent implements OnInit {

  bids : any;

  constructor(private bidsItems:BidsService) {
    this.bids = bidsItems.bidsData();
  }

  ngOnInit(): void {
  }

}
