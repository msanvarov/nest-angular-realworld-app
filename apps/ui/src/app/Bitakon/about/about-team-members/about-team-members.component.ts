import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-team-members',
  templateUrl: './about-team-members.component.html',
  styleUrls: ['./about-team-members.component.scss']
})
export class AboutTeamMembersComponent implements OnInit {

  teamMemberData = [
    {
      id:1,
      img:'assets/img/team/team-1.jpg',
      name:'Bessie Cooper',
      title:'Co-founder'
    },
    {
      id:2,
      img:'assets/img/team/team-2.jpg',
      name:'Wade Warren',
      title:'Finance'
    },
    {
      id:3,
      img:'assets/img/team/team-3.jpg',
      name:'Esther Howard',
      title:'UI Designer'
    },
    {
      id:4,
      img:'assets/img/team/team-4.jpg',
      name:'Guy Hawkins',
      title:'Manager'
    },
    {
      id:5,
      img:'assets/img/team/team-5.jpg',
      name:'Mark Cuban',
      title:'Co-founder'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
