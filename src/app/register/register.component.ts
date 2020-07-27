import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {RegisterService} from './register.service';
import {RegistrationStatus} from '../shared/users/users.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  registrationStatus: RegistrationStatus;
  resultMessage: string;
  submitted = false;

  constructor(private httpClient: HttpClient, private registerService: RegisterService) {
    httpClient.post('/api/users/login', {
      email: 'adyt2@gmail.com',
      password: 'testingss'
    }).subscribe(response => {
      console.log(response);
    });

    this.signupForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  register(): void {
    this.signupForm.disable();
    this.registerService.registerUser(this.signupForm.value)
      .subscribe((result: RegistrationStatus) => {
        this.registrationStatus = result;
        this.submitted = true;
      });
    this.signupForm.reset();
    this.signupForm.enable();
  }
}
