import { Injectable,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'active-dark-mode' | 'active-light-mode';

@Injectable({
  providedIn: 'root'
})
export class ThemeTogglerService {

  currentTheme: Theme = 'active-dark-mode';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add(this.currentTheme);
  }

  switchTheme(newTheme: Theme): void {
    this.document.body.classList.replace(this.currentTheme, newTheme)
    this.currentTheme = newTheme;
  }
}
