import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { UsersService, UserInterface } from 'src/app/Services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", [Validators.required,Validators.minLength(3)]),
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, ]),
    password2: new FormControl("", [Validators.required]),
  })
  constructor(private location: Location, private userService: UsersService) {
   }
   goBack(){
      this.location.back();
   }

   submitForm(){
     if(this.signUpForm.valid){
     console.log(this.signUpForm.value);
      this.userService.signupUser(this.signUpForm.value)
      .subscribe((response)=>{
          localStorage.setItem("accessToken", response.access_token);
      })
     }else return console.log(this.signUpForm);
    //  this.userService.signupUser()
   }


  ngOnInit(): void {
  }

}
