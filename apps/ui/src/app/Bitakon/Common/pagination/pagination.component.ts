import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input () url : boolean | undefined;
  @Input () upcomingUrl : boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
