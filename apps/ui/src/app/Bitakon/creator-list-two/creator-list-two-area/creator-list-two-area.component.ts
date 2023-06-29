import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-list-two-area',
  templateUrl: './creator-list-two-area.component.html',
  styleUrls: ['./creator-list-two-area.component.scss']
})
export class CreatorListTwoAreaComponent implements OnInit {

  collectionAllData = [
    {
      id:1,
      img:'assets/img/collection/2/user/user-1.jpg',
      title:'@xander_hall...',
      revenue:'12.54',
      revenue_two:'4,940,635',
    },
    {
      id:2,
      img:'assets/img/collection/2/user/user-2.jpg',
      title:'Crypt0cutie.',
      revenue:'7.02',
      revenue_two:'24,124,119',
    },
    {
      id:3,
      img:'assets/img/collection/2/user/user-3.jpg',
      title:'Jazzy Panda.',
      revenue:'10.00',
      revenue_two:'12,154,468',
    },
    {
      id:4,
      img:'assets/img/collection/2/user/user-4.jpg',
      title:'Montiya_monk',
      revenue:'14.56',
      revenue_two:'10,580,951',
    },
    {
      id:5,
      img:'assets/img/collection/2/user/user-5.jpg',
      title:'Douglas lyphe',
      revenue:'16.04',
      revenue_two:'12,154,468',
    },
    {
      id:6,
      img:'assets/img/collection/2/user/user-6.jpg',
      title:'Ninja Toy Face',
      revenue:'14.56',
      revenue_two:'24,124,119',
    },
    {
      id:7,
      img:'assets/img/collection/2/user/user-7.jpg',
      title:'Benjamin0025',
      revenue:'21.04',
      revenue_two:'25,124,119',
    },
    {
      id:8,
      img:'assets/img/collection/2/user/user-8.jpg',
      title:'Shahnewaz',
      revenue:'12.54',
      revenue_two:'3,065,647',
    },
    {
      id:9,
      img:'assets/img/collection/2/user/user-9.jpg',
      title:'Ida Chapman',
      revenue:'15.02',
      revenue_two:'3,642,678',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
