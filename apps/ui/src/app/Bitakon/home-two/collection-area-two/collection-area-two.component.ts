import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-area-two',
  templateUrl: './collection-area-two.component.html',
  styleUrls: ['./collection-area-two.component.scss']
})
export class CollectionAreaTwoComponent implements OnInit {

  collectionAllData = [
    {
      id:1,
      img:'assets/img/collection/2/user/user-1.jpg',
      title:'@xander_hall...',
      revenue:'12.54',
    },
    {
      id:2,
      img:'assets/img/collection/2/user/user-2.jpg',
      title:'Crypt0cutie.',
      revenue:'7.02',
    },
    {
      id:3,
      img:'assets/img/collection/2/user/user-3.jpg',
      title:'Jazzy Panda.',
      revenue:'10.00',
    },
    {
      id:4,
      img:'assets/img/collection/2/user/user-4.jpg',
      title:'Montiya_monk',
      revenue:'14.56',
    },
    {
      id:5,
      img:'assets/img/collection/2/user/user-5.jpg',
      title:'Douglas lyphe',
      revenue:'16.04',
    },
    {
      id:6,
      img:'assets/img/collection/2/user/user-6.jpg',
      title:'Ninja Toy Face',
      revenue:'14.56',
    },
    {
      id:7,
      img:'assets/img/collection/2/user/user-7.jpg',
      title:'Benjamin0025',
      revenue:'21.04',
    },
    {
      id:8,
      img:'assets/img/collection/2/user/user-8.jpg',
      title:'Shahnewaz',
      revenue:'12.54',
    },
    {
      id:9,
      img:'assets/img/collection/2/user/user-9.jpg',
      title:'Ida Chapman',
      revenue:'15.02',
    },
    {
      id:10,
      img:'assets/img/collection/2/user/user-10.jpg',
      title:'Jimmy Wright',
      revenue:'08.44',
    },
    {
      id:11,
      img:'assets/img/collection/2/user/user-11.jpg',
      title:'CloneX #11070',
      revenue:'07.54',
    },
    {
      id:12,
      img:'assets/img/collection/2/user/user-12.jpg',
      title:'Shiddiq',
      revenue:'08.00',
    },
  ]

  etheData = [
    {
      id:1,
      img:'assets/img/collection/2/user/user-9.jpg',
      title:'Ida Chapman',
      revenue:'15.02',
    },
    {
      id:2,
      img:'assets/img/collection/2/user/user-10.jpg',
      title:'Jimmy Wright',
      revenue:'08.44',
    },
    {
      id:3,
      img:'assets/img/collection/2/user/user-11.jpg',
      title:'CloneX #11070',
      revenue:'07.54',
    },
    {
      id:4,
      img:'assets/img/collection/2/user/user-12.jpg',
      title:'Shiddiq',
      revenue:'08.00',
    },
    {
      id:5,
      img:'assets/img/collection/2/user/user-1.jpg',
      title:'@xander_hall...',
      revenue:'12.54',
    },
    {
      id:6,
      img:'assets/img/collection/2/user/user-2.jpg',
      title:'Crypt0cutie.',
      revenue:'7.02',
    },
    {
      id:7,
      img:'assets/img/collection/2/user/user-3.jpg',
      title:'Jazzy Panda.',
      revenue:'10.00',
    },
    {
      id:8,
      img:'assets/img/collection/2/user/user-4.jpg',
      title:'Montiya_monk',
      revenue:'14.56',
    },
    {
      id:9,
      img:'assets/img/collection/2/user/user-5.jpg',
      title:'Douglas lyphe',
      revenue:'16.04',
    },
    {
      id:10,
      img:'assets/img/collection/2/user/user-6.jpg',
      title:'Ninja Toy Face',
      revenue:'14.56',
    },
    {
      id:11,
      img:'assets/img/collection/2/user/user-7.jpg',
      title:'Benjamin0025',
      revenue:'21.04',
    },
    {
      id:12,
      img:'assets/img/collection/2/user/user-8.jpg',
      title:'Shahnewaz',
      revenue:'12.54',
    },
  ]

  flowData = [
    {
      id:1,
      img:'assets/img/collection/2/user/user-2.jpg',
      title:'Crypt0cutie.',
      revenue:'7.02',
    },
    {
      id:2,
      img:'assets/img/collection/2/user/user-3.jpg',
      title:'Jazzy Panda.',
      revenue:'10.00',
    },
    {
      id:3,
      img:'assets/img/collection/2/user/user-4.jpg',
      title:'Montiya_monk',
      revenue:'14.56',
    },
    {
      id:4,
      img:'assets/img/collection/2/user/user-5.jpg',
      title:'Douglas lyphe',
      revenue:'16.04',
    },
    {
      id:5,
      img:'assets/img/collection/2/user/user-11.jpg',
      title:'CloneX #11070',
      revenue:'07.54',
    },
    {
      id:6,
      img:'assets/img/collection/2/user/user-12.jpg',
      title:'Shiddiq',
      revenue:'08.00',
    },
    {
      id:7,
      img:'assets/img/collection/2/user/user-1.jpg',
      title:'@xander_hall...',
      revenue:'12.54',
    },
    {
      id:8,
      img:'assets/img/collection/2/user/user-2.jpg',
      title:'Crypt0cutie.',
      revenue:'7.02',
    },
    {
      id:9,
      img:'assets/img/collection/2/user/user-9.jpg',
      title:'Ida Chapman',
      revenue:'15.02',
    },
    {
      id:10,
      img:'assets/img/collection/2/user/user-10.jpg',
      title:'Jimmy Wright',
      revenue:'08.44',
    },
    {
      id:11,
      img:'assets/img/collection/2/user/user-7.jpg',
      title:'Benjamin0025',
      revenue:'21.04',
    },
    {
      id:12,
      img:'assets/img/collection/2/user/user-8.jpg',
      title:'Shahnewaz',
      revenue:'12.54',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
