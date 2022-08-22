import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagingDataServiceService } from '../messaging-data-service.service';

@Component({
  selector: 'app-message-count',
  templateUrl: './message-count.component.html',
  styleUrls: ['./message-count.component.css']
})
export class MessageCountComponent implements OnInit {

  messageCount: number = 0; 

  constructor(private messagingSvc: MessagingDataServiceService) { }

  ngOnInit(): void {
    this.messagingSvc.userMessagesChanged.subscribe((messages: Message[]) => {
      this.messageCount = messages.length; 
    })
  }

  

}
