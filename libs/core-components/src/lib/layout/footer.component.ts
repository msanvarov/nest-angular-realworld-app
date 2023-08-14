/* eslint-disable @angular-eslint/no-empty-lifecycle-method */

/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'starter-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor() {}

  year = new Date().getFullYear();

  ngOnInit(): void {}
}
