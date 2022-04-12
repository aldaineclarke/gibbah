import { Component, Input, OnInit } from '@angular/core';
import { ConversationInterface, ConversationsService } from 'src/app/Services/conversations.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  // @Input() details!: ConversationInterface;
  @Input() details: string = "";

  constructor(private conversationsService: ConversationsService) { }
  // conversations: ConversationInterface[] = [];
  ngOnInit(): void {
    // const userId = localStorage.getItem('userId') as string;
    // // gets all the conversations from database returns an array of conversations
    // this.conversationsService.getAllConversations(userId).subscribe(
    //   (response:ConversationInterface[])=>{
    //     this.conversations = response;
    //   }
    // );

  }

}
