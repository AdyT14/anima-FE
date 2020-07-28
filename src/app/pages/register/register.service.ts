import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationStatus, User} from '../../shared/users/users.model';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class RegisterService {

  constructor(private httpClient: HttpClient) {
  }

  registerUser(user: User): Observable<RegistrationStatus> {
    return this.httpClient.post('/api/users/signup', user)
      .pipe(
        map(() => registrationStatus.successful),
        catchError(() => of(registrationStatus.failed)),
      );
  }

}

export const registrationStatus = {
  successful: {
    result: true,
    message: 'Your account has been registered, you can continue to the login page',
  },
  failed: {
    result: false,
    message: 'Your registration failed, please verify your information and try again'
  }
};
