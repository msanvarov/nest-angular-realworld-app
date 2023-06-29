import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ProductDataService } from '../../services/product-data/product-data.service';

@Component({
  selector: 'app-product-live-items',
  templateUrl: './product-live-items.component.html',
  styleUrls: ['./product-live-items.component.scss']
})
export class ProductLiveItemsComponent implements OnInit {

  productsLive : any;
  constructor(private productLiveItems:ProductDataService,private cdref: ChangeDetectorRef) {
    this.productsLive = productLiveItems.productLiveData();

    setInterval(() => {
      this.myTimer()
    }, 1000);
   }

  ngOnInit(): void {
  }

  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year: number = 2023;
  month: number = 12;
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  day: number = 31;

  ngAfterContentChecked() {
    this.myTimer();
  }

  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2023, 12, 31);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
  }

}
