import { Component, NgModule, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../ticket.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-purchase-ticket',
  templateUrl: './purchase-ticket.component.html',
  styleUrls: ['./purchase-ticket.component.css']
})
export class PurchaseTicketComponent implements OnInit {
  ticketDetails: Ticket = {
    from: '',
    to: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  purchaseTicket(): void {
    this.ticketService.purchaseTicket(this.ticketDetails).subscribe(
      (response: any) => {
        console.log('Ticket purchased successfully:', response);
        // Reset form fields after successful purchase
        this.ticketDetails = {
          from: '',
          to: '',
          firstName: '',
          lastName: '',
          email: ''
        };
      },
      (error: any) => {
        console.error('Error purchasing ticket:', error);
        // Handle error here
      }
    );
  }
}
