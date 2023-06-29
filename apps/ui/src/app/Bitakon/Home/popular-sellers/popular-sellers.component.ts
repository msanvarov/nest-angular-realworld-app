import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-sellers',
  templateUrl: './popular-sellers.component.html',
  styleUrls: ['./popular-sellers.component.scss']
})
export class PopularSellersComponent implements OnInit {


  sellersData = [
    {
      id:1,
      img:'assets/img/seller/seller-1.jpg',
      name:'Robin Milford',
      revenue:'00.74',
      color:''
    },
    {
      id:2,
      img:'assets/img/seller/seller-2.jpg',
      name:'Penny Tool',
      revenue:'00.254',
      color:'clr-green'
    },
    {
      id:3,
      img:'assets/img/seller/seller-3.jpg',
      name:'Shahnewaz SP',
      revenue:'00.20',
      color:'clr-orange'
    },
    {
      id:4,
      img:'assets/img/seller/seller-4.jpg',
      name:'Joss Sticks',
      revenue:'00.74',
      color:'clr-purple'
    },
    {
      id:5,
      img:'assets/img/seller/seller-5.jpg',
      name:'Ruüd van Driver',
      revenue:'00.74',
      color:'clr-yellow'
    },
    {
      id:6,
      img:'assets/img/seller/seller-6.jpg',
      name:'Gordon Norman',
      revenue:'00.78',
      color:'clr-pink'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
