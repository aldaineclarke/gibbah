import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { ConversationsService } from 'src/app/Services/conversations.service';
import { MessagesService } from 'src/app/Services/messages.service';

@Component({
  selector: 'app-chatboard',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.css']
})
export class ChatboardComponent {
  socketServer = io("http://localhost:3000");
  joined = false;
  username = "";
  chatArr = new Array(22);
  typingDisplay: string = '';
  constructor(private messsagesService: MessagesService, private conversationsService: ConversationsService) { }

  ngOnInit(): void {

    }

  //   this.socketServer.emit("findAllMessages",{}, (response:any)=>{
  //     console.log(response)
  //     this.conversationsService.getAllConversations = response;
  //   })
  //   this.socketServer.on("message",(message)=>{
  //     this.messages.sendMessage(message)
  //   })
  //   this.socketServer.on('typing',(response:any) =>{
  //     if(response.isTyping){
  //       this.typingDisplay = `${response.name} is typing...`
  //     }else{
  //       this.typingDisplay = '';
  //     }
  //   })
  // }
  // sendMessage(message: string){
  //   let payload = {text: message}
  //   this.socketServer.emit("createMessage",payload,(response:any)=>{

  //   })
  // }
  // join(username: string){
  //   this.socketServer.emit('join', {name: username},()=>{
  //     this.joined = true;
  //   })
  // }
  // emitTyping(){
  //   this.socketServer.emit('typing', {isTyping: true});
  //   let timeout = setTimeout(()=>{
  //     this.socketServer.emit("typing", {isTyping: false});
  //   }, 2000);
  // }

}
