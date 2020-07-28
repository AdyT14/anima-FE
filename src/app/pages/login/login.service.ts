import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../../shared/users/users.model';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  loginUser(user: User): Observable<boolean> {
    return this.httpClient.post('/api/users/login', user, {observe: 'response'})
      .pipe(
        map((response: HttpResponse<any>) => {
          localStorage.setItem('token', response.headers.get('Authorization'));
          return true;
        }),
        catchError(() => of(false)),
      );
  }

}
