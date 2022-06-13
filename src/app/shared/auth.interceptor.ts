import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleLoginService } from '../google-login/google-login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private googleLoginService: GoogleLoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url || (request.url.startsWith('http') && !(environment.SERVER_URL && request.url.startsWith(environment.SERVER_URL)))) {
      return next.handle(request);
    }

    const token = this.googleLoginService.getIdToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }

}
