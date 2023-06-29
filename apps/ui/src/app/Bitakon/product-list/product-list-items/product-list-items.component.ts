import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data/product-data.service';

@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.scss']
})
export class ProductListItemsComponent implements OnInit {

  products : any;
  constructor(private productItems:ProductDataService) {
    this.products = productItems.productData();
   }

  ngOnInit(): void {
  }

}
