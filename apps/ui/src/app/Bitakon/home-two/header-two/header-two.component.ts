import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit {

  headerSticky : boolean = false;

  showSidebar : boolean = false;

  // sticky nav
  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

    // handleSidebar
    handleSidebar () {
      this.showSidebar = true;
    }
    handleSidebarClose () {
      this.showSidebar = false;
    }


  constructor() { }

  ngOnInit(): void {
  }

}
