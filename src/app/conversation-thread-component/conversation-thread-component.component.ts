import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagingDataServiceService } from '../messaging-data-service.service';

@Component({
  selector: 'app-conversation-thread-component',
  templateUrl: './conversation-thread-component.component.html',
  styleUrls: ['./conversation-thread-component.component.css']
})
export class ConversationThreadComponentComponent implements OnInit {
  senderMessages: Message[] = []; 
  userMessages: Message[] = []; 

  constructor(private messagingSvce: MessagingDataServiceService) { }
  

  ngOnInit(): void {
    this.senderMessages = this.messagingSvce.getSenderMessages(); 
    this.messagingSvce.senderMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** messages have changed");
      this.senderMessages = messages;
    })
    this.userMessages = this.messagingSvce.getUserMessages(); 
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** messages have changed");
      this.userMessages = messages;
    });

  }

}
