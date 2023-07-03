import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main>
      <!-- 404 area start -->
      <section class="error__area pt-120 pb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="error__content text-center">
                <div class="error__thumb m-img mb-20">
                  <img src="assets/img/error/error-1.png" alt="" />
                </div>
                <div class="error__content">
                  <h3 class="error__title">Page Not Found</h3>
                  <p>
                    The page you are looking for does not exist. It might have
                    been moved or deleted.
                  </p>
                  <a [routerLink]="['/']" class="tp-btn-3">Back to Landing</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
})
export default class PageNotFoundComponent {}
