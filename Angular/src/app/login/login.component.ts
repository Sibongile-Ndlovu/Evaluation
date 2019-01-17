import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MyserviceService } from '../myservice.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _myservice: MyserviceService, private _router: Router, private _activatedRouter: ActivatedRoute) { }

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;


  ngOnInit() {
    this.loginForm = this.formBuilder.group ({
      'email': [this.user.email, [
        Validators.required,
        Validators.email,
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    })

  }

// onRegisterSubmit(){
//   alert(this.user.email + ' ' + this.user.password )
// }

login() {
  console.log(this.loginForm.value, "User details");

  if (this.loginForm.valid) {
    this._myservice.login(this.loginForm.value)
    .subscribe(
      token => {
        console.log(token, "my token");
        localStorage.setItem('token',token.toString());
        this._router.navigate(['/name']);
      },
      error =>{}
    )
    }
}
}
