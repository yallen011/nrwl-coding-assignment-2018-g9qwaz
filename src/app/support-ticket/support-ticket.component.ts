import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../backend.service';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css']
})
export class SupportTicketComponent implements OnInit {
  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit() {
  }

}
