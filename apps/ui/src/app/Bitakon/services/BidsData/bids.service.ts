import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidsService {

  constructor() { }

  bidsData () {
    return [
      {
        id:1,
        img:'assets/img/bid/bid-img-13.jpg',
        title:'Aqua Watcher Genesis'
      },
      {
        id:2,
        img:'assets/img/bid/bid-img-14.jpg',
        title:'Blockraptors 3D'
      },
      {
        id:3,
        img:'assets/img/bid/bid-img-15.jpg',
        title:'VZUS ambwe'
      },
      {
        id:4,
        img:'assets/img/bid/bid-img-16.jpg',
        title:'Beach Moon Escape'
      },
      {
        id:5,
        img:'assets/img/bid/bid-img-2.jpg',
        title:'Beach Moon Escape'
      },
    ]
  }
}
