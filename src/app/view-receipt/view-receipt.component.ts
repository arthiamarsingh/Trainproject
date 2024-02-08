import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { ReceiptDetails } from '../ticket.model';


@Component({
  selector: 'app-view-receipt',
  templateUrl: './view-receipt.component.html',
  styleUrls: ['./view-receipt.component.css']
})
export class ViewReceiptComponent implements OnInit {
  receiptDetails: ReceiptDetails | undefined;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.fetchReceiptDetails();
  }

  private fetchReceiptDetails(): void {
    // Assuming you have a method in TicketService to fetch receipt details
    this.ticketService.getReceiptDetails().subscribe(
      (receiptDetails) => {
        this.receiptDetails = receiptDetails;
      },
      (error) => {
        console.error('Error fetching receipt details:', error);
      }
    );
  }
}
