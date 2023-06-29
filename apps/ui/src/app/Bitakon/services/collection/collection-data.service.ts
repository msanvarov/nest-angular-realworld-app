import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionDataService {

  constructor() { }

  collectionData () {
    return [
      {
        smImg_1:'assets/img/collection/collection-1.jpg',
        smImg_2:'assets/img/collection/collection-2.jpg',
        smImg_3:'assets/img/collection/collection-3.jpg',
        bigImg:'assets/img/collection/collection-big-1.jpg',
        user:'assets/img/collection/user/collection-user-1.jpg',
        title:'Modern Art collection',
        resource:'152'
      },
      {
        smImg_1:'assets/img/collection/collection-4.jpg',
        smImg_2:'assets/img/collection/collection-5.jpg',
        smImg_3:'assets/img/collection/collection-6.jpg',
        bigImg:'assets/img/collection/collection-big-2.jpg',
        user:'assets/img/collection/user/collection-user-2.jpg',
        title:'Abstract Figure Collections',
        resource:'266'
      },
      {
        smImg_1:'assets/img/collection/collection-7.jpg',
        smImg_2:'assets/img/collection/collection-8.jpg',
        smImg_3:'assets/img/collection/collection-9.jpg',
        bigImg:'assets/img/collection/collection-big-3.jpg',
        user:'assets/img/collection/user/collection-user-3.jpg',
        title:'Modern Art collection',
        resource:'156'
      },
      {
        smImg_1:'assets/img/collection/collection-10.jpg',
        smImg_2:'assets/img/collection/collection-11.jpg',
        smImg_3:'assets/img/collection/collection-12.jpg',
        bigImg:'assets/img/collection/collection-big-4.jpg',
        user:'assets/img/collection/user/collection-user-4.jpg',
        title:'The Creation by Pak',
        resource:'102'
      },
      {
        smImg_1:'assets/img/collection/collection-13.jpg',
        smImg_2:'assets/img/collection/collection-14.jpg',
        smImg_3:'assets/img/collection/collection-15.jpg',
        bigImg:'assets/img/collection/collection-big-5.jpg',
        user:'assets/img/collection/user/collection-user-5.jpg',
        title:"Dante's Inferno",
        resource:'166'
      },
      {
        smImg_1:'assets/img/collection/collection-16.jpg',
        smImg_2:'assets/img/collection/collection-17.jpg',
        smImg_3:'assets/img/collection/collection-18.jpg',
        bigImg:'assets/img/collection/collection-big-6.jpg',
        user:'assets/img/collection/user/collection-user-6.jpg',
        title:"Shahnewaz's Clash",
        resource:'102'
      },
    ]
  }
}
