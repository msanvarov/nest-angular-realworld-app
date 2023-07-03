import { RouteMeta } from '@analogjs/router';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthGuard, CoreComponentsModule } from '@starter/core-components';
import {
  getArticleTags,
  getArticles,
  getAuthoredArticles,
} from '@starter/store';

export const routeMeta: RouteMeta = {
  title: 'Landing',
  // @ts-expect-error
  canActivate: [AuthGuard],
};

@Component({
  selector: 'ui-landing-page',
  standalone: true,
  imports: [CoreComponentsModule, RouterModule],
  template: `
   <div class="create__nav mb-10">    
     <starter-articles-feed />
  `,
})
export default class LandingPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    console.log('Dispatching actions from LandingPageComponent');
    this.store.dispatch(
      getArticles({
        limit: 10,
        offset: 0,
      }),
    );
    this.store.dispatch(
      getAuthoredArticles({
        limit: 10,
        offset: 0,
      }),
    );
    this.store.dispatch(getArticleTags());
  }
}
