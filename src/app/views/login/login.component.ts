import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  loginForm: FormGroup;
  //Dummy data
  userName: string = "admin";
  password: string = "admin";
  USERNAME: string;
  PASSWORD: string;

  ngOnInit() {

    this.createLoginForm();


  }

  // create form
  createLoginForm() {
    this.loginForm = this.fb.group({
      username: [, Validators.required],
      password: [, Validators.required]
    })
  }

  onSubmit() {
    this.getUsername();
    this.getPassword();
    if (this.USERNAME === this.userName && this.PASSWORD===this.password) {
      console.log("mattched")
    }
    else {
      console.log("either username or password is not matched");
    }
  }


  //getter and setter

  getUsername() {
    this.USERNAME = this.loginForm.get('username').value;
  }
  getPassword() {
    this.PASSWORD = this.loginForm.get('password').value;

  }




}
