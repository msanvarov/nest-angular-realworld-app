import { Component, OnInit,Input } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
import { ProductDataService } from '../../services/product-data/product-data.service';


@Component({
  selector: 'app-products-two',
  templateUrl: './products-two.component.html',
  styleUrls: ['./products-two.component.scss']
})
export class ProductsTwoComponent implements OnInit {

  @Input () product : string | undefined;
  @Input () product_grid : string | undefined;

  minValue: number = 0.00;
  maxValue: number = 10.00;
  options: Options = {
    floor: 0.00,
    ceil: 10.00,
    hidePointerLabels:false
  };

  products : any;

  constructor(private productItems:ProductDataService) {
    this.products = productItems.productData();
  }

  ngOnInit(): void {
  }

}
