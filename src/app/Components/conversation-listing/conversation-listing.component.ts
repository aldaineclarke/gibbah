import { Component, OnInit } from '@angular/core';
import { ConversationInterface, ConversationsService } from 'src/app/Services/conversations.service';

@Component({
  selector: 'conversation-listing',
  templateUrl: './conversation-listing.component.html',
  styleUrls: ['./conversation-listing.component.css']
})
export class ConversationListingComponent implements OnInit {

  // constructor(private conversationsService: ConversationsService) { }
  conversations: ConversationInterface[] = new Array(12);
  ngOnInit(): void {
    // const userId = localStorage.getItem('userId') as string;
    // // gets all the conversations from database returns an array of conversations
    // this.conversationsService.getAllConversations(userId).subscribe(
    //   (response:ConversationInterface[])=>{
    //     this.conversations = response;
    //   }
    //);
  }

}
