import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-common-footer',
  templateUrl: './common-footer.component.html',
  styleUrls: ['./common-footer.component.scss']
})
export class CommonFooterComponent implements OnInit {

  @Input () containerClass : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
