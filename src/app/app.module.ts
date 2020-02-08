import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BackendService} from './backend.service';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';



const routes: Routes = [
  { path: '', component: SupportTicketsComponent },
  { path: 'details/:id', component: TicketDetailsComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    TicketDetailsComponent,
    SupportTicketsComponent,
    SupportTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
