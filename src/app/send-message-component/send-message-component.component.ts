import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../loggin-service';
import { Message } from '../message';
import { MessagingDataServiceService } from '../messaging-data-service.service';
import { User } from '../user';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css']
})
export class SendMessageComponentComponent implements OnInit {
  messageString: string = "" ; 
 

  constructor(private loggingSvce: LoggingService,
    private messagingSvce: MessagingDataServiceService,
    ) { }

  ngOnInit(): void {
  }

  onSendMessage(){
    // create a new message and send it to the messagingSvce
    let maria: User = {firstName: "Maria"}; 
    let newMessage: Message = new Message(maria, this.messageString, 10, 20); 
    this.messagingSvce.addUserMessage(newMessage); 
    this.loggingSvce.log("Send Following message: "); 
    this.loggingSvce.log(this.messageString); 
  }
}
