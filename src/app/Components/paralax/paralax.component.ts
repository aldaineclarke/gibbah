import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paralax',
  templateUrl: './paralax.component.html',
  styleUrls: ['./paralax.component.css']
})
export class ParalaxComponent implements OnInit {

  constructor() { }

  navItems = [{
    navId: "secure_messaging",
    navTitle: "Secure Messaging",
    isActive: false
  },
  {
    navId: "real_time_communication",
    navTitle: "Real Time Communication",
    isActive: false
  },
  {
    navId: "chatting_in_teams",
    navTitle: "Chatting in Teams",
    isActive: false
  },
  {
    navId: "business_chat",
    navTitle: "Business Chat",
    isActive: false
  }]
  ngOnInit(): void {
  }
  viewHandler(element:Element){
    this.navItems.forEach((link)=>{
      link.isActive = false;
      if(element.id == link.navId) link.isActive = true;
    })

  }
}
