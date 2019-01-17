import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  successMessage = '';

  constructor(private formBuilder: FormBuilder, private _myservice: MyserviceService,private _router: Router, private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group ({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'number': [this.user.number, [
        Validators.required
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    })

  }

//alert message
// onRegisterSubmit(){
//   alert(this.user.name + ' ' + this.user.email + ' ' + this.user.number + ' ' + this.user.password );

// }

//sending registration data to node.js
sendRegister(){
  console.log(this.registerForm.value, "user check");

  if (this.registerForm.valid) {
    this._myservice.submitRegister(this.registerForm.value)
    .subscribe(
      data => {
        this.successMessage ='Registration success';
        this._router.navigate(['/login']);
      }, 
      error => this.successMessage = 'Hey Girl! there is an ERROR'
    )
  }
}
}
