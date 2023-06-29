import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-area-three',
  templateUrl: './creator-area-three.component.html',
  styleUrls: ['./creator-area-three.component.scss']
})
export class CreatorAreaThreeComponent implements OnInit {

  creatorData = [
    {
      id:1,
      img:'assets/img/creator/creator-1.jpg',
      title:'@xander_hall...',
      creator__revenue_text:'$4,940,635',
    },
    {
      id:2,
      img:'assets/img/creator/creator-2.jpg',
      title:'Benjamin0025',
      creator__revenue_text:'$24,124,119',
    },
    {
      id:3,
      img:'assets/img/creator/creator-3.jpg',
      title:'Ninja toy face',
      creator__revenue_text:'$12,154,468',
    },
    {
      id:4,
      img:'assets/img/creator/creator-4.jpg',
      title:'Ida Chapman',
      creator__revenue_text:'$10,580,951',
    },
    {
      id:5,
      img:'assets/img/creator/creator-5.jpg',
      title:'CloneX #11070',
      creator__revenue_text:'$12,154,468',
    },
    {
      id:6,
      img:'assets/img/creator/creator-6.jpg',
      title:'Jazzy Panda',
      creator__revenue_text:'$24,124,119',
    },
    {
      id:7,
      img:'assets/img/creator/creator-7.jpg',
      title:'Jimmy Wright',
      creator__revenue_text:'$24,124,119',
    },
    {
      id:8,
      img:'assets/img/creator/creator-8.jpg',
      title:'Montiya_monk',
      creator__revenue_text:'$3,065,647',
    },
    {
      id:9,
      img:'assets/img/creator/creator-9.jpg',
      title:'Douglas lyphe',
      creator__revenue_text:'$3,642,678',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
