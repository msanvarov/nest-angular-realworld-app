import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss']
})
export class BlogAreaComponent implements OnInit {

  blogData = [
    {
      id:1,
      img:'assets/img/blog/blog-1.jpg',
      title:'Exonemo on communicating love and hate for NFTs.',
      category:'NFTs Marketplace',
      authorImg:'assets/img/blog/author/blog-author-1.jpg',
      authorName:'Joss Sticks'
    },
    {
      id:2,
      img:'assets/img/blog/blog-2.jpg',
      title:'Paper Rad on setting the precedent for Internet culture.',
      category:'Design',
      authorImg:'assets/img/blog/author/blog-author-2.jpg',
      authorName:'Robin Milford'
    },
    {
      id:3,
      img:'assets/img/blog/blog-3.jpg',
      title:'MUSE0 is pioneering a new model for Internet-native museums.',
      category:'CEO marketing',
      authorImg:'assets/img/blog/author/blog-author-3.jpg',
      authorName:'Joss Sticks'
    },
    {
      id:4,
      img:'assets/img/blog/blog-4.jpg',
      title:'Adama Delphine Fawundu On weaving the past with the present.',
      category:'Marketing',
      authorImg:'assets/img/blog/author/blog-author-4.jpg',
      authorName:'Stepan Nilov'
    },
    {
      id:5,
      img:'assets/img/blog/blog-5.jpg',
      title:'Serwah Attafuah on being punk in the digital art world.',
      category:'Digital Art',
      authorImg:'assets/img/blog/author/blog-author-5.jpg',
      authorName:'Penny Tool'
    },
    {
      id:6,
      img:'assets/img/blog/blog-6.jpg',
      title:'MUSE0 is pioneering a new model for Internet-native museums.',
      category:'Development',
      authorImg:'assets/img/blog/author/blog-author-6.jpg',
      authorName:'Gordon Norman'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
