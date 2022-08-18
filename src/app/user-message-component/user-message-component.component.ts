import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-message-component',
  templateUrl: './user-message-component.component.html',
  styleUrls: ['./user-message-component.component.css']
})
export class UserMessageComponentComponent implements OnInit {
  @Input() message = {
    sender: { firstName: "Aurelie" },
    text: "Message from Aurelie",
    conversationId: 1,
    sequenceNumber: 2,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
