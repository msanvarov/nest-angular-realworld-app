import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-feature-area',
  templateUrl: './support-feature-area.component.html',
  styleUrls: ['./support-feature-area.component.scss']
})
export class SupportFeatureAreaComponent implements OnInit {

  featureData = [
    {
      bgColor:'',
      icon_dark:'assets/img/icon/features/features-icon-1.png',
      icon_light:'assets/img/icon/features/features-icon-1-light.png',
      title:"Grow your digital art Collection",
      subtitle:'Add new, trending and rare artwork to your collection.',
    },
    {
      bgColor:'yellow-bg',
      icon_dark:'assets/img/icon/features/features-icon-2.png',
      icon_light:'assets/img/icon/features/features-icon-2-light.png',
      title:"Earn money dy trading NFTs",
      subtitle:'Get paid by selling NFTs with secured payment methods.',
    },
    {
      bgColor:'green-bg',
      icon_dark:'assets/img/icon/features/features-icon-3.png',
      icon_light:'assets/img/icon/features/features-icon-3-light.png',
      title:"Discover <br /> Top artists & Creators",
      subtitle:'Explore beautiful digital art by talented artists from around the world.',
    },
    {
      bgColor:'green-bg',
      icon_dark:'assets/img/icon/features/features-icon-4.png',
      icon_light:'assets/img/icon/features/features-icon-4-light.png',
      title:"Buy and sell your <br /> NFTs",
      subtitle:'Easily buy and sell your NFTs in the largest marketplace.',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
