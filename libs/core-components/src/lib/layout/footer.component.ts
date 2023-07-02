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
