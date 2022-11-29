import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = "Bearer don't forget password";
    const studyToken = 'perfect future is waiting for us';

    const modifiedReq = req.clone({
      headers: req.headers
        .set('Auth', authToken)
        .set('custom-study-token', studyToken),
    });

    return next.handle(modifiedReq);
  }
}
