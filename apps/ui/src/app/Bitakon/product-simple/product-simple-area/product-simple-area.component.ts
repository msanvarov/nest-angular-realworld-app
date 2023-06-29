import { Component, OnInit } from '@angular/core';
import { NftDataService } from '../../services/nft-data/nft-data.service';

@Component({
  selector: 'app-product-simple-area',
  templateUrl: './product-simple-area.component.html',
  styleUrls: ['./product-simple-area.component.scss']
})
export class ProductSimpleAreaComponent implements OnInit {

  productsData : any;

  constructor(private productsItems:NftDataService) {
    this.productsData = productsItems.artData();
   }

  ngOnInit(): void {
  }

}
