import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-create-single-area',
  templateUrl: './create-single-area.component.html',
  styleUrls: ['./create-single-area.component.scss']
})
export class CreateSingleAreaComponent implements OnInit {

  @Input () multiple : string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
