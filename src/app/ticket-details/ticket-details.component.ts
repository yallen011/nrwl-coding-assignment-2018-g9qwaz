import { Component, OnInit } from '@angular/core';
import { BackendService, Ticket } from '../backend.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  ticketObs = this.backend.ticket(this.route.snapshot.params['id']);

  constructor(private backend: BackendService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('init called');
  }

  getStatus(completed: boolean) {
    return completed ? 'Completed' : 'In Progress';
  }

  close(id: number) {
    this.ticketObs = this.backend.complete(id, true);
  }

  onSubmit(ticketId: number, assigneeId: HTMLInputElement) {
    console.log(ticketId);
    console.log(assigneeId.valueAsNumber);
    this.backend.assign(ticketId, assigneeId.valueAsNumber)
    .subscribe(ticket => console.log(ticket));
    this.resetForm(assigneeId);
  }

  resetForm(assigneeId: HTMLInputElement) {
    assigneeId.value = '';
  }
}
