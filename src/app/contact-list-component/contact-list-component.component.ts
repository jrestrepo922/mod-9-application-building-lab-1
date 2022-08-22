import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css']
})
export class ContactListComponentComponent implements OnInit {
  users: User[] = [
    { firstName: "Aurelie" },
    { firstName: "James" },
    { firstName: "Jessica" },
    { firstName: "Ludovic" },
    { firstName: "Maria" },
  ];

  constructor() { 
    console.log("Displaying all users")
    this.users.map((user: User) => console.log(user.firstName)); 
  }

  ngOnInit(): void {

  }

}
