import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalStorageService } from '@starter/store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const webtoken = this.localStorageService.retrieveEntry('webtoken');

    const request = req.clone({
      setHeaders: {
        ...(webtoken ? { Authorization: `Bearer ${webtoken}` } : {}),
      },
    });
    return next.handle(request);
  }
}
