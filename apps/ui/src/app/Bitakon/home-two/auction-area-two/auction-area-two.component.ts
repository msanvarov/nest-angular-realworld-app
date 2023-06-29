import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-auction-area-two',
  templateUrl: './auction-area-two.component.html',
  styleUrls: ['./auction-area-two.component.scss']
})
export class AuctionAreaTwoComponent implements OnInit {

  auctionSmItemData = [
    {
      id: 1,
      img:'assets/img/auction/sm/auction-sm-1.jpg',
      title:'Elon musk silver..',
      authorImg:'assets/img/auction/sm/author/author-1.jpg',
      smPrice:'4.01',
      smShow:'12'
    },
    {
      id: 2,
      img:'assets/img/auction/sm/auction-sm-2.jpg',
      title:'Smoking Apes #00',
      authorImg:'assets/img/auction/sm/author/author-2.jpg',
      smPrice:'1.01',
      smShow:'10'
    },
    {
      id: 3,
      img:'assets/img/auction/sm/auction-sm-3.jpg',
      title:'Future coming soon',
      authorImg:'assets/img/auction/sm/author/author-3.jpg',
      smPrice:'3.01',
      smShow:'11'
    },
    {
      id: 4,
      img:'assets/img/auction/sm/auction-sm-4.jpg',
      title:'0xc29c11175...248',
      authorImg:'assets/img/auction/sm/author/author-4.jpg',
      smPrice:'2.01',
      smShow:'10'
    },
    {
      id: 5,
      img:'assets/img/auction/sm/auction-sm-5.jpg',
      title:'Silver coin 3d print',
      authorImg:'assets/img/auction/sm/author/author-5.jpg',
      smPrice:'1.01',
      smShow:'17'
    },
    {
      id: 6,
      img:'assets/img/auction/sm/auction-sm-6.jpg',
      title:'ETH never die',
      authorImg:'assets/img/auction/sm/author/author-6.jpg',
      smPrice:'3.07',
      smShow:'12'
    },
  ]


  constructor(private cdref: ChangeDetectorRef) {
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
  month: number = 6;
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
    this.targetDate = new Date(2023, 6, 31);
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
