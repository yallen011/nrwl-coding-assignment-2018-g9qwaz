import { Component, OnInit} from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-support-tickets',
  templateUrl: './support-tickets.component.html',
  styleUrls: ['./support-tickets.component.css']
})
export class SupportTicketsComponent implements OnInit {
  ticketsObs = this.backend.tickets();
  users = this.backend.users();

  constructor(private backend: BackendService) { }

  ngOnInit() {
  }

  onSubmit(description: HTMLInputElement) {
    console.log(description.value);
    this.backend.newTicket({description: description.value})
    .subscribe(ticket => console.log(ticket));
    this.resetForm(description);
  }

  resetForm(description: HTMLInputElement) {
    description.value = '';
  }

}
