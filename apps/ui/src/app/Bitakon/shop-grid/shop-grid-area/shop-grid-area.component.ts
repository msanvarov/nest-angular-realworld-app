import { Component, OnInit } from '@angular/core';
import { NftDataService } from '../../services/nft-data/nft-data.service';

@Component({
  selector: 'app-shop-grid-area',
  templateUrl: './shop-grid-area.component.html',
  styleUrls: ['./shop-grid-area.component.scss']
})
export class ShopGridAreaComponent implements OnInit {

  shopGridData : any;
  constructor(private shopItems:NftDataService) {
    this.shopGridData = shopItems.trendingsData();
  }

  ngOnInit(): void {
  }

}
