import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let modifiedReq = req;
    if (!req.url.endsWith('/api/users/signup') && !req.url.endsWith('/api/users/login')) {
      req.headers.set('Authorization', localStorage.getItem('token'));
      modifiedReq = req.clone({
        headers: req.headers.set('Authorization', localStorage.getItem('token'))
      });
    }

    return next.handle(modifiedReq);
  }

}
