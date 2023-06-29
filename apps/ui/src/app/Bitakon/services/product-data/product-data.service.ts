import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor() { }

  productData () {
    return [
     {
       id:1,
       img:'assets/img/bid/2/bid-img-9.jpg',
       caruselImg:'assets/img/bid/2/bid-img-1.jpg',
       list_img:'assets/img/bid/list/bid-list-1.jpg',
       heart:'24',
       title:'Terrestrial black hole',
       box_price:'3.54',
       stock:'6',
     },
     {
       id:2,
       img:'assets/img/bid/2/bid-img-10.jpg',
       caruselImg:'assets/img/bid/2/bid-img-2.jpg',
       list_img:'assets/img/bid/list/bid-list-2.jpg',
       heart:'10',
       title:'Chickolatev2',
       box_price:'2.02',
       stock:'10',
     },
     {
       id:3,
       img:'assets/img/bid/2/bid-img-3.jpg',
       caruselImg:'assets/img/bid/2/bid-img-3.jpg',
       list_img:'assets/img/bid/list/bid-list-3.jpg',
       heart:'12',
       title:'Brave Tigers NFT',
       box_price:'0.01',
       stock:'7',
     },
     {
       id:4,
       img:'assets/img/bid/2/bid-img-11.jpg',
       caruselImg:'assets/img/bid/2/bid-img-4.jpg',
       list_img:'assets/img/bid/list/bid-list-4.jpg',
       heart:'20',
       title:'Amazing digital art',
       box_price:'1.00',
       stock:'8',
     },
     {
       id:5,
       img:'assets/img/bid/2/bid-img-12.jpg',
       caruselImg:'assets/img/bid/2/bid-img-5.jpg',
       list_img:'assets/img/bid/list/bid-list-5.jpg',
       heart:'54',
       title:'Prime Ape Planet',
       box_price:'4.01',
       stock:'4',
     },
     {
       id:6,
       img:'assets/img/bid/2/bid-img-13.jpg',
       list_img:'assets/img/bid/list/bid-list-6.jpg',
       heart:'35',
       title:'Based Mafia',
       box_price:'1.00',
       stock:'11',
     },
     {
       id:7,
       img:'assets/img/bid/2/bid-img-7.jpg',
       heart:'48',
       title:'Beach Moon Escape',
       box_price:'4.02',
       stock:'9',
     },
     {
       id:8,
       img:'assets/img/bid/2/bid-img-8.jpg',
       heart:'25',
       title:'New Year Evangelist',
       box_price:'2.47',
       stock:'14',
     },
    ]
  }

  productLiveData () {
    return [
      {
        id:1,
        img:'assets/img/auction/auction-img-5.jpg',
        title:'Colorful Abstract Painting',
        authorImg:'assets/img/auction/author/auction-author-1.jpg',
        authorName:'Ida Chapman',
      },
      {
        id:2,
        img:'assets/img/auction/auction-img-2.jpg',
        title:'Chickolatev2',
        authorImg:'assets/img/auction/author/auction-author-2.jpg',
        authorName:'Chiatev2',
      },
      {
        id:3,
        img:'assets/img/auction/auction-img-3.jpg',
        title:'Brave Tigers NFT',
        authorImg:'assets/img/auction/author/auction-author-3.jpg',
        authorName:'Penny Tool',
      },
      {
        id:4,
        img:'assets/img/auction/auction-img-4.jpg',
        title:'Prime Ape Planet',
        authorImg:'assets/img/auction/author/auction-author-4.jpg',
        authorName:'Ruüd van',
      },
      {
        id:5,
        img:'assets/img/auction/auction-img-5.jpg',
        title:'Based Mafia',
        authorImg:'assets/img/auction/author/auction-author-5.jpg',
        authorName:'Joss Sticks',
      },
      {
        id:6,
        img:'assets/img/auction/auction-img-6.jpg',
        title:'Beach Moon Escape',
        authorImg:'assets/img/auction/author/auction-author-6.jpg',
        authorName:'Jimmy Wright',
      }
    ]
  }

}
