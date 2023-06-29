import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-three',
  templateUrl: './collections-three.component.html',
  styleUrls: ['./collections-three.component.scss']
})
export class CollectionsThreeComponent implements OnInit {

  collectionData = [
    {
      id:1,
      collection__box_tag:'Crypton',
      smImg:'assets/img/collection/3/sm/collection-sm-7.jpg',
      bigImg:'assets/img/collection/3/collection-7.jpg',
      collection__box_title:'Generative Art',
      nft:'12.56 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-1.jpg',
      collection__box_user_name:'@Crypto Krazie'
    },
    {
      id:2,
      collection__box_tag:'MonoArt',
      smImg:'assets/img/collection/3/sm/collection-sm-3.jpg',
      bigImg:'assets/img/collection/3/collection-3.jpg',
      collection__box_title:'Mono Art',
      nft:'21.14 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-2.jpg',
      collection__box_user_name:'@Mono Art'
    },
    {
      id:3,
      collection__box_tag:'Dreams',
      smImg:'assets/img/collection/3/sm/collection-sm-9.jpg',
      bigImg:'assets/img/collection/3/collection-9.jpg',
      collection__box_title:'Paper Dreams',
      nft:'12.56 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-3.jpg',
      collection__box_user_name:'@Mono Art'
    },
    {
      id:4,
      collection__box_tag:'Travel',
      smImg:'assets/img/collection/3/sm/collection-sm-10.jpg',
      bigImg:'assets/img/collection/3/collection-10.jpg',
      collection__box_title:'Travel <br> Without Moving',
      nft:'12.56 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-4.jpg',
      collection__box_user_name:'@galinadeinega'
    },
    {
      id:5,
      collection__box_tag:'Dinf',
      smImg:'assets/img/collection/3/sm/collection-sm-11.jpg',
      bigImg:'assets/img/collection/3/collection-11.jpg',
      collection__box_title:"Dante's Inferno",
      nft:'12.56 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-5.jpg',
      collection__box_user_name:'@Crypto Krazie'
    },
    {
      id:6,
      collection__box_tag:'Streets',
      smImg:'assets/img/collection/3/sm/collection-sm-5.jpg',
      bigImg:'assets/img/collection/3/collection-5.jpg',
      collection__box_title:"The Ineffabl",
      nft:'10.06 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-6.jpg',
      collection__box_user_name:'@Crypto Krazie'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
