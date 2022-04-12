import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {
  @Input() data = {};

  constructor() { }

  ngOnInit(): void {
  }

}
