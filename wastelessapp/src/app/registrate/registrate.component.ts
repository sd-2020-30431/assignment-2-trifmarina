import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ConfigService} from "../services/config.service";
import {first} from "rxjs/operators";
import {User} from "../models/user";

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  u: User;
  us:string;
  em:string;
  pa:string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username:'',
      email:'',
      password:''
    });
    console.log("innit");
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(userData) {
    this.submitted = true;


    console.log("sub");
    this.loading = true;
    // this.userService.register(this.registerForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       // this.alertService.success('Registration successful', true);
    //       this.router.navigate(['/home']);
    //     },
    //     error => {
    //       this.loading = false;
    //     });


    //this.u = this.registerForm.value;

    // this.u.Username='';
    // this.u.Email='';
    // this.u.Password='';
    //
    // this.u.Username = this.registerForm.controls['username'].value
    // this.u.Email = this.registerForm.controls['email'].value
    // this.u.Password = this.registerForm.controls['passwords'].value
   // console.log(userData);
    this.us = this.registerForm.controls['username'].value.toString();
    this.em = this.registerForm.controls['email'].value.toString();
    this.pa = this.registerForm.controls['password'].value.toString();

    this.u = new User(this.us,this.em,this.pa);
    console.log(this.u);
    this.userService.register(this.u).subscribe(res=> {
      console.log(res);
    });



  }

}
