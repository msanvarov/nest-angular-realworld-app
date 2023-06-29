import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-grid-area',
  templateUrl: './creator-grid-area.component.html',
  styleUrls: ['./creator-grid-area.component.scss']
})
export class CreatorGridAreaComponent implements OnInit {

  creatorsData = [
    {
      bgImg:'assets/img/creator/bg/creator-bg-1.jpg',
      creator:'assets/img/creator/creator-1.jpg',
      name:'Benjamin_025'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-2.jpg',
      creator:'assets/img/creator/creator-2.jpg',
      name:'Jimmy_Wright'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-3.jpg',
      creator:'assets/img/creator/creator-3.jpg',
      name:'CloneX_#11070'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-4.jpg',
      creator:'assets/img/creator/creator-4.jpg',
      name:'Montiya_monk'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-5.jpg',
      creator:'assets/img/creator/creator-5.jpg',
      name:'Ida_Chapman'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-6.jpg',
      creator:'assets/img/creator/creator-6.jpg',
      name:'@xander_hall'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
