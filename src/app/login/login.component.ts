import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../app-models/user.model';
import { UserService } from '../app-services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm: FormGroup;
  userRegisterForm: FormGroup;
  checked: boolean;
  user: User = new User();
  submitted = false;

  constructor(private _cookieService: CookieService, private user_service: UserService) { }

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

  'userName': new FormControl(null,[
    Validators.required
  ]),
  'email': new FormControl(null,[
    Validators.required,
    Validators.email
  ]),
  'regpassword': new FormControl(null,[
    Validators.required
  ]),
  'confirmpassword': new FormControl(null,[
    Validators.required
  ]),
})

  }

  onSubmit() {
    console.log("submit");
    if (this.userLoginForm.invalid) {
      return;
    }

    

    if (this.checked === true) {

      this._cookieService.set('username', this.userLoginForm.controls['userID'].value);
      this._cookieService.set('password', this.userLoginForm.controls['password'].value);

    }
    // this.authService.login(this.userLoginForm.value.userID, this.userLoginForm.value.password);
    // this.disableSpinner();
    console.log("submitted");

  }

onRegSubmit(){
  console.log("submit");

  if (this.userRegisterForm.invalid) {
    return;
  }
  
  this.save();
}

save(){

  this.user_service.createuser(this.user)
   
     this.user = new User();
}
}
