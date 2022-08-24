import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./loggin-service";
import { Message } from "./message";


@Injectable({
  providedIn: 'root'
})
export class MessagingDataServiceService {

  private senderMessages: Message[] = [];

  private userMessages: Message[] = [];

  //Event Emmiters do are generic so assign a type
  senderMessagesChanged = new EventEmitter<Message[]>();
  userMessagesChanged = new EventEmitter<Message[]>();

  getSenderMessages() {
    this.httpClient
      .get<Message[]>("http://localhost:8080/api/get-sender-messages")
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      });
    return this.senderMessages.slice();
  }


  getUserMessages() {
    this.httpClient.get<Message[]>("http://localhost:8080/api/get-user-messages").subscribe(
        (messages: Message[]) => {
            console.log(messages);
            this.userMessages = messages;
            this.userMessagesChanged.emit(this.userMessages);
        }
    )
    return this.userMessages.slice();
  }

  // addUserMessage(newMessage: Message) {
  //   this.userMessages.push(newMessage);
  //   this.userMessagesChanged.emit(this.userMessages.slice());
  // }
  addUserMessage(newMessage: Message) {
    this.httpClient.post<Message[]>("http://localhost:8080/api/add-user-message", newMessage).subscribe(
        (messages: Message[]) => {
            console.log(messages);
            //happens last because is asyn
            this.userMessages = messages;
            this.userMessagesChanged.emit(this.userMessages);
        }
    )
    //happens first and is done this way so users can see message immediately 
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  deleteUserMessage(deleteMessage: Message) {
    this.httpClient.delete<Message[]>(`http://localhost:8080/api/conversations/${deleteMessage.conversationId}/${deleteMessage.sequenceNumber}`).subscribe(
        (messages: Message[]) => {
            console.log(messages);
            this.userMessages = messages;
            this.userMessagesChanged.emit(this.userMessages);
        }
    )
    
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  // @DeleteMapping("/api/conversations/{conversationId}/{sequenceId}")
  constructor(
    private loggingSvce: LoggingService,
    private httpClient: HttpClient
    ) {
    loggingSvce.log("Messaging Data Service constructor completed");
  }
}
