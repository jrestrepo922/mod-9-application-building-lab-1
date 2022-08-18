import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
  @Input() user = {
    firstName: "default", 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
