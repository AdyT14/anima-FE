import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {RegisterService} from './register.service';
import {RegistrationStatus} from '../../shared/users/users.model';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  registrationStatus: RegistrationStatus;
  submitted = false;

  constructor(private httpClient: HttpClient, private registerService: RegisterService, title: Title) {

    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, validPasswordValidator()])
    });
    title.setTitle('Register in Anima');
  }

  ngOnInit(): void {
  }

  register(): void {

    if (this.signupForm.valid) {
      this.registerService.registerUser(this.signupForm.value)
        .subscribe((result: RegistrationStatus) => {

          this.submitted = true;
          this.registrationStatus = result;
          if (result.result) {
            this.signupForm.reset();
          }
        });
    } else {
      this.signupForm.markAllAsTouched();
    }

  }
}

export function validPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value || control.value === '') {
      return null;
    }
    const forbidden = control.value.match('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
    return forbidden ? null : {notValidPassword: {value: control.value}};
  };


}
