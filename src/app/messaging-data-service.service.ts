import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./loggin-service";
import { Message } from "./message";


@Injectable({
  providedIn: 'root'
})
export class MessagingDataServiceService {

  private senderMessages: Message[] = [];

  private userMessages: Message[] = [];

  senderMessagesChanged = new EventEmitter<Message[]>();
  userMessagesChanged = new EventEmitter<Message[]>();

  getSenderMessages() {
    return this.httpClient.get<Message[]>("http://localhost:8080/api/get-sender-messages");
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

  addUserMessage(newMessage: Message) {
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  constructor(
    private loggingSvce: LoggingService,
    private httpClient: HttpClient
    ) {
    loggingSvce.log("Messaging Data Service constructor completed");
  }
}
