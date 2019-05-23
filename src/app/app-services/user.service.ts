import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createuser(user: Object){

const url = 'http://192.168.43.57:8000/newuser/';
this.http.post(url, user).subscribe(
  (res) => {
    console.log("User created successfully");
  },
  err => console.log(err)
);
  }
}
