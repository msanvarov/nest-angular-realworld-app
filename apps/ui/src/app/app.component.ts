import { Component,OnInit } from '@angular/core';
import { ThemeTogglerService,Theme } from './Bitakon/services/theme-toggler/theme-toggler.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitakon';
  isDarkTheme = true;

  themeSetting : boolean = false;

  handleThemeSetting () {
    this.themeSetting = true;
  }

  handleThemeSettingClose () {
    this.themeSetting = false;
  }



  constructor(private tt: ThemeTogglerService,private router : Router) {}

  switchTheme(newTheme: Theme): void {
    this.tt.switchTheme(newTheme);
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if(! (evt instanceof NavigationEnd)){
        return
      }
      window.scrollTo(0,0)
    })
  }
}
