import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Message } from '../message';
import { MessagingDataServiceService } from '../messaging-data-service.service';

@Component({
  selector: 'app-user-message-component',
  templateUrl: './user-message-component.component.html',
  styleUrls: ['./user-message-component.component.css']
})
export class UserMessageComponentComponent implements OnInit {
  @Input() message: Message = {
    sender: { firstName: "Aurelie" },
    text: "Message from Aurelie",
    conversationId: 1,
    sequenceNumber: 2,
  }

  constructor(
    private messagingSvce: MessagingDataServiceService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  deleteComment(){
    this.messagingSvce.deleteUserMessage(this.message); 
  }

}
