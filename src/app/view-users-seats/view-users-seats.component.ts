import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { User } from '../ticket.model';


@Component({
  selector: 'app-view-users-seats',
  templateUrl: './view-users-seats.component.html',
  styleUrls: ['./view-users-seats.component.css']
})
export class ViewUsersSeatsComponent implements OnInit {
  usersAndSeats: Map<User, string> = new Map<User, string>();


  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getUsersAndSeats('SectionA').subscribe(
      data => {
        this.usersAndSeats = data;
      },
      error => {
        console.error('Error fetching users and seats:', error);
      }
    );
  }
}
