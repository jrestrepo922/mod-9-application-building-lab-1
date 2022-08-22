import { Component, OnInit } from '@angular/core';
import { Conversation } from '../conversation';

@Component({
  selector: 'app-conversation-control-component',
  templateUrl: './conversation-control-component.component.html',
  styleUrls: ['./conversation-control-component.component.css']
})
export class ConversationControlComponentComponent implements OnInit {
  conversations: Conversation[] = [
    {
      id: 1, 
      users:  [
        { firstName: "Claire"},
        { firstName: "Ludovic"},
        { firstName: "Jessica"}
      ]
    }, 
    {
      id: 2, 
      users: [
        { firstName: "Claire"},
        { firstName: "James"}
      ]
    }, 
    {
      id: 3, 
      users: [
        { firstName: "Claire" },
        { firstName: "Aurelie" },
        { firstName: "James" },
        { firstName: "Jessica" },
      ]
    }, 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
