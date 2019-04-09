import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm: FormGroup;
  userRegisterForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.userLoginForm = new FormGroup({
      'userID': new FormControl(null, [
        Validators.required
      ]),
      'password': new FormControl(null, [
        Validators.required
      ]),
    });

this.userRegisterForm = new FormGroup({

  'firstName': new FormControl(null,[
    Validators.required
  ]),
  'lastName': new FormControl(null,[
    Validators.required
  ]),
  'email': new FormControl(null,[
    Validators.required,
    Validators.email
  ])
})

  }

}
