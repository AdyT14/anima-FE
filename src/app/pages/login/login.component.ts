import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  failedLogin = false;

  constructor(private loginService: LoginService, private router: Router, private title: Title) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    title.setTitle('Login in Anima');
  }

  ngOnInit(): void {
  }

  login(): void {

    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.value)
        .subscribe((result: boolean) => {
          if (result) {
            this.failedLogin = false;
            this.router.navigateByUrl('/dashboard');

          } else {
            this.failedLogin = true;
          }
        });
    } else {
      this.loginForm.markAllAsTouched();
    }

  }
}
