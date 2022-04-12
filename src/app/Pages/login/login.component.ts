import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface, UsersService } from 'src/app/Services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    // profileImg: new FormControl("", []),
    password: new FormControl("", [Validators.required]),
  })
  constructor(private location: Location, private _router:Router, private readonly userService: UsersService) { }

  ngOnInit(): void {
  }
  goBack(){
    this.location.back();
 }
 login(){
   let data = this.loginForm.value;
  //  this._router.navigate(['/chat']);
   this.userService.loginUser(data).subscribe((response)=>{
     if(response){
       console.log(response)
       localStorage.setItem("userId", response.id);
       localStorage.setItem("accessToken", response.access_token)
       this._router.navigate(['/chat']);
     }
   })
 }

}
