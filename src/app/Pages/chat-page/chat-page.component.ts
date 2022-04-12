import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface, UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  user!:UserInterface
  
  constructor(private _userService: UsersService, private _router: Router) { }

  ngOnInit(): void {
    const id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 'undefined';
    this._userService.getUserInfo(id).subscribe((user:UserInterface)=>{
      if(!user){this._router.navigate(['/notFound'])}
      this.user = user;
      console.log(this.user)
    })
  }
  toggleSidebar(sidebar: HTMLElement, button:HTMLElement): void {
      sidebar.classList.toggle("active");
      if(sidebar.classList.contains("active")){
        button.style.transform = "rotateY(0.5turn)";
      }else{
        button.style.transform = "rotateY(0)";
      }
      
  }

}
