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
  sequenceNumber: number = 2; 

 

  constructor(private loggingSvce: LoggingService,
    private messagingSvce: MessagingDataServiceService,
    ) { }

  ngOnInit(): void {
  }

  onSendMessage(){
    // create a new message and send it to the messagingSvce
    ++this.sequenceNumber;
    let maria: User = {firstName: "Maria"}; 
    let newMessage: Message = new Message(maria, this.messageString, 1, this.sequenceNumber); 
    this.messagingSvce.addUserMessage(newMessage); 
    this.loggingSvce.log("Send Following message: "); 
    this.loggingSvce.log(this.messageString); 
  }
}
